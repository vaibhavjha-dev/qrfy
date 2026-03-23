#!/usr/bin/env node

const { getLocalIP } = require("../lib/network");
const { displayQR } = require("../lib/qr");
const { runServer } = require("../lib/runner");

const { version } = require("../package.json");

const args = process.argv.slice(2);

if (args[0] === "--version" || args[0] === "-v" || args[0] === "-V") {
  console.log(`qrfy v${version}`);
  process.exit(0);
}

if (args.length === 0 || args[0] === "--help" || args[0] === "-h") {
  console.log("");
  console.log(`  \x1b[1mqrfy\x1b[0m v${version} - Scan your dev server instantly`);
  console.log("");
  console.log("  \x1b[1mUsage:\x1b[0m");
  console.log("    qrfy <command> [args...]");
  console.log("");
  console.log("  \x1b[1mExamples:\x1b[0m");
  console.log("    qrfy next dev");
  console.log("    qrfy vite");
  console.log("    qrfy npm run dev");
  console.log("");
  console.log("  \x1b[1mOptions:\x1b[0m");
  console.log("    -h, --help       Show this help message");
  console.log("    -v, --version    Show version number");
  console.log("");
  process.exit(0);
}

const ip = getLocalIP();

if (!ip) {
  console.error(
    "\x1b[31m  QRfy: No network connection found. Connect to WiFi and try again.\x1b[0m"
  );
  process.exit(1);
}

runServer(args, (port) => {
  const localUrl = `http://localhost:${port}`;
  const mobileUrl = `http://${ip}:${port}`;
  displayQR(localUrl, mobileUrl);
});
