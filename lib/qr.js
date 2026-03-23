const qrcode = require("qrcode-terminal");

function displayQR(localUrl, mobileUrl) {
  console.log("");
  console.log("\x1b[1m\x1b[32m  QRfy connected\x1b[0m");
  console.log("");
  console.log(`  Local:   \x1b[36m${localUrl}\x1b[0m`);
  console.log(`  Mobile:  \x1b[36m${mobileUrl}\x1b[0m`);
  console.log("");
  console.log("  Scan to open on your phone:");
  console.log("");
  qrcode.generate(mobileUrl, { small: true }, (code) => {
    const indented = code
      .split("\n")
      .map((line) => "  " + line)
      .join("\n");
    console.log(indented);
    console.log("");
    console.log(
      "  \x1b[33mEnsure both devices are on the same WiFi\x1b[0m"
    );
    console.log("");
  });
}

module.exports = { displayQR };
