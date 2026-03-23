const PORT_PATTERNS = [
  /https?:\/\/localhost:(\d+)/,
  /https?:\/\/127\.0\.0\.1:(\d+)/,
  /https?:\/\/0\.0\.0\.0:(\d+)/,
  /https?:\/\/\[::\]:(\d+)/,
  /port\s+(\d+)/i,
  /:(\d{4,5})\b/,
];

function extractPort(text) {
  for (const pattern of PORT_PATTERNS) {
    const match = text.match(pattern);
    if (match) {
      const port = parseInt(match[1], 10);
      if (port > 0 && port <= 65535) {
        return port;
      }
    }
  }
  return null;
}

module.exports = { extractPort };
