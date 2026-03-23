const { spawn } = require("child_process");
const { extractPort } = require("./parser");

function runServer(args, onPort) {
  const child = spawn(args.join(" "), [], {
    stdio: ["inherit", "pipe", "pipe"],
    shell: true,
    env: { ...process.env },
  });

  let detected = false;

  function handleData(data) {
    const text = data.toString();
    process.stdout.write(text);

    if (!detected) {
      const port = extractPort(text);
      if (port) {
        detected = true;
        onPort(port);
      }
    }
  }

  child.stdout.on("data", handleData);
  child.stderr.on("data", (data) => {
    const text = data.toString();
    process.stderr.write(text);

    if (!detected) {
      const port = extractPort(text);
      if (port) {
        detected = true;
        onPort(port);
      }
    }
  });

  child.on("error", (err) => {
    console.error(`\x1b[31m  QRfy error: ${err.message}\x1b[0m`);
    process.exit(1);
  });

  child.on("close", (code) => {
    process.exit(code ?? 0);
  });

  // Forward signals to child
  process.on("SIGINT", () => child.kill("SIGINT"));
  process.on("SIGTERM", () => child.kill("SIGTERM"));

  return child;
}

module.exports = { runServer };
