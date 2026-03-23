<h1 align="center">QRfy</h1>

<p align="center">
  <b>Scan your dev server instantly.</b><br>
  One command. One scan. Your app opens on your phone.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@vaibhavjha/qrfy"><img src="https://img.shields.io/npm/v/@vaibhavjha/qrfy.svg?style=flat-square&color=blue" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/@vaibhavjha/qrfy"><img src="https://img.shields.io/npm/dm/@vaibhavjha/qrfy.svg?style=flat-square" alt="downloads"></a>
  <a href="https://github.com/vaibhavjha-dev/qrfy/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/@vaibhavjha/qrfy.svg?style=flat-square" alt="license"></a>
</p>

---

## The Problem

Every time you start a dev server and want to test on your phone:

1. Find your local IP address
2. Type `192.168.x.x:3000` on your phone
3. Mistype it. Try again.
4. Repeat this 10 times a day.

## The Solution

```bash
qrfy next dev
```

```
  QRfy connected

  Local:   http://localhost:3000
  Mobile:  http://192.168.1.5:3000

  Scan to open on your phone:

  [QR CODE]

  Ensure both devices are on the same WiFi
```

Scan the QR code. Done.

---

## Install

```bash
npm install -g @vaibhavjha/qrfy
```

<details>
<summary>Other package managers</summary>

```bash
yarn global add @vaibhavjha/qrfy
pnpm add -g @vaibhavjha/qrfy
bun add -g @vaibhavjha/qrfy
```

</details>

## Usage

```bash
qrfy <your-dev-command>
```

| Framework | Command |
|-----------|---------|
| Next.js | `qrfy next dev` |
| Vite | `qrfy vite` |
| npm scripts | `qrfy npm run dev` |
| Create React App | `qrfy react-scripts start` |
| Remix | `qrfy remix dev` |
| Any server | `qrfy python -m http.server 8000` |

### Add to package.json

```json
{
  "scripts": {
    "dev": "qrfy next dev"
  }
}
```

Then just `npm run dev` and scan.

### CLI Options

```
qrfy --help       Show help message
qrfy --version    Show version number
```

## How It Works

```
You run:  qrfy vite
          |
          v
   Spawns your dev server
          |
          v
   Watches stdout for a port
          |
          v
   Detects your LAN IP
          |
          v
   Generates QR code
```

Your dev server output passes through normally — QRfy just adds the QR code on top. No config. No setup. Zero overhead.

## Requirements

- Node.js >= 14
- Both devices on the same WiFi network

## License

[MIT](LICENSE) - Made by [Vaibhav Jha](https://github.com/vaibhavjha-dev)
