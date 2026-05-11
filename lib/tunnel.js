const { spawn, spawnSync } = require("child_process");

const TUNNEL_URL_REGEX = /https:\/\/[a-z0-9-]+\.trycloudflare\.com/i;

function hasCloudflared() {
  const probe = spawnSync(
    process.platform === "win32" ? "where" : "which",
    ["cloudflared"],
    { stdio: "ignore" }
  );
  return probe.status === 0;
}

function printInstallHint() {
  console.error("");
  console.error("\x1b[31m  QRfy: cloudflared is not installed.\x1b[0m");
  console.error("");
  console.error("  Install it, then re-run with --tunnel:");
  console.error("    macOS:    \x1b[36mbrew install cloudflared\x1b[0m");
  console.error("    Windows:  \x1b[36mwinget install --id Cloudflare.cloudflared\x1b[0m");
  console.error("    Linux:    \x1b[36mhttps://pkg.cloudflare.com/index.html\x1b[0m");
  console.error("");
}

function startTunnel(port, onUrl) {
  const child = spawn(
    "cloudflared",
    ["tunnel", "--no-autoupdate", "--url", `http://localhost:${port}`],
    { stdio: ["ignore", "pipe", "pipe"] }
  );

  let resolved = false;

  function scan(buf) {
    if (resolved) return;
    const match = buf.toString().match(TUNNEL_URL_REGEX);
    if (match) {
      resolved = true;
      onUrl(match[0]);
    }
  }

  child.stdout.on("data", scan);
  child.stderr.on("data", scan);

  child.on("error", (err) => {
    console.error(`\x1b[31m  QRfy tunnel error: ${err.message}\x1b[0m`);
  });

  return child;
}

module.exports = { hasCloudflared, printInstallHint, startTunnel };
