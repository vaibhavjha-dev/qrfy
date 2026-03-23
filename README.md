# QRfy

**Scan your dev server instantly.**

QRfy wraps any dev server command and generates a QR code in your terminal so you can open it on your phone in seconds. No more typing `192.168.x.x:3000` manually.

[![npm version](https://img.shields.io/npm/v/@vaibhavjha/qrfy.svg)](https://www.npmjs.com/package/@vaibhavjha/qrfy)
[![license](https://img.shields.io/npm/l/@vaibhavjha/qrfy.svg)](https://github.com/vaibhavjha-dev/qrfy/blob/main/LICENSE)

---

## Install

```bash
npm install -g @vaibhavjha/qrfy
```

Or with other package managers:

```bash
# yarn
yarn global add @vaibhavjha/qrfy

# pnpm
pnpm add -g @vaibhavjha/qrfy

# bun
bun add -g @vaibhavjha/qrfy
```

## Usage

```bash
qrfy <your-dev-command>
```

### Examples

```bash
# Next.js
qrfy next dev

# Vite
qrfy vite

# npm scripts
qrfy npm run dev

# Any server
qrfy python -m http.server 8000
```

### Output

```
  QRfy connected

  Local:   http://localhost:3000
  Mobile:  http://192.168.1.5:3000

  Scan to open on your phone:

  [QR CODE]

  Ensure both devices are on the same WiFi
```

## How It Works

1. Spawns your dev command as a child process
2. Watches stdout/stderr for a port number
3. Detects your LAN IP address
4. Generates a terminal QR code pointing to `http://<your-ip>:<port>`

Your dev server output is passed through normally — QRfy just adds the QR code on top.

## Package.json Integration

```json
{
  "scripts": {
    "dev": "qrfy next dev"
  }
}
```

Then just `npm run dev` and scan.

## Supported Frameworks

Works with anything that prints a URL or port to the terminal:

- Next.js
- Vite
- Create React App
- Remix
- Astro
- SvelteKit
- Express / Fastify / any Node server
- Python / Go / Ruby servers
- Anything else

## Requirements

- Node.js >= 14
- Both devices on the same WiFi network

## License

MIT
