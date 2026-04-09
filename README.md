# QRfy

**Your dev server, on your phone, in seconds.**
Stop typing IPs. Start scanning.

[![npm version](https://img.shields.io/npm/v/@vaibhavjha/qrfy.svg?style=for-the-badge&color=blue)](https://www.npmjs.com/package/@vaibhavjha/qrfy)
[![license](https://img.shields.io/npm/l/@vaibhavjha/qrfy.svg?style=for-the-badge)](https://github.com/vaibhavjha-dev/qrfy/blob/main/LICENSE)
[![node](https://img.shields.io/node/v/@vaibhavjha/qrfy.svg?style=for-the-badge)](https://nodejs.org)

---

## Why?

> You start a dev server. You want to test on your phone. Now you're squinting at `ifconfig` output and fat-fingering `192.168.1.47:3000` into a tiny mobile browser. Again.

**QRfy fixes this in one line.**

---

## Quick Start

```bash
# Install as a dev dependency
npm install -D @vaibhavjha/qrfy

# Run with your dev server
npx qrfy next dev
```

That's it. A QR code appears in your terminal. Scan it. Done.

---

## Demo

```
$ qrfy next dev

  > next dev
  > ready - started server on 0.0.0.0:3000

  -----------------------------------------------

  QRfy connected

  Local:   http://localhost:3000
  Mobile:  http://192.168.1.5:3000

  Scan to open on your phone:

  [QR CODE]

  Ensure both devices are on the same WiFi

  -----------------------------------------------
```

---

## Install

```bash
# As a dev dependency
npm install -D @vaibhavjha/qrfy
```

<details>
<summary><b>yarn / pnpm / bun</b></summary>

```bash
yarn add -D @vaibhavjha/qrfy
pnpm add -D @vaibhavjha/qrfy
bun add -d @vaibhavjha/qrfy
```

</details>

<details>
<summary><b>Install globally (optional)</b></summary>

```bash
npm install -g @vaibhavjha/qrfy
yarn global add @vaibhavjha/qrfy
pnpm add -g @vaibhavjha/qrfy
bun add -g @vaibhavjha/qrfy
```

</details>

---

## Usage

```bash
qrfy <your-dev-command>
```

### Works With Everything

| | Framework | Command |
|---|-----------|---------|
| **Next.js** | React framework | `qrfy next dev` |
| **Vite** | Lightning fast | `qrfy vite` |
| **CRA** | Create React App | `qrfy react-scripts start` |
| **Remix** | Full stack React | `qrfy remix dev` |
| **Astro** | Content-focused | `qrfy astro dev` |
| **SvelteKit** | Svelte framework | `qrfy svelte-kit dev` |
| **npm scripts** | Any project | `qrfy npm run dev` |
| **Python** | http.server | `qrfy python -m http.server 8000` |
| **Go** | Any server | `qrfy go run main.go` |

> Basically anything that prints a URL or port to the terminal.

### Drop it in `package.json`

```json
{
  "scripts": {
    "dev": "qrfy next dev"
  }
}
```

Now `npm run dev` gives you a QR code every time. Your whole team gets it for free.

---

## QR for Anything

Need a QR code for a URL, a WiFi password, or any piece of text? Use `-q`:

```bash
qrfy -q https://example.com
qrfy -q "hello world"
qrfy -q "WIFI:T:WPA;S:MyNetwork;P:mypassword;;"
```

No dev server, no port detection — just a scannable QR code in your terminal.

---

## CLI Options

```bash
qrfy <command>            # Wrap a dev server
qrfy -q <text|url...>     # QR code for any text or URL
qrfy --help, -h           # Show help
qrfy --version, -v        # Show version
```

---

## How It Works

```
  +------------------+
  |  qrfy next dev   |   You run your command
  +--------+---------+
           |
           v
  +------------------+
  |  Spawn process   |   QRfy runs it as a child process
  +--------+---------+
           |
           v
  +------------------+
  |  Watch stdout    |   Detects port from server output
  +--------+---------+
           |
           v
  +------------------+
  |  Get LAN IP      |   Finds your local network address
  +--------+---------+
           |
           v
  +------------------+
  |  Print QR code   |   Generates scannable QR in terminal
  +------------------+
```

- All stdout/stderr from your server passes through untouched
- QR renders once — no spam
- Ctrl+C stops both QRfy and your server cleanly

---

## Requirements

| | Requirement |
|---|---|
| **Runtime** | Node.js >= 14 |
| **Network** | Same WiFi |
| **OS** | macOS, Linux, Windows |

---

## Troubleshooting

<details>
<summary><b>QR code doesn't appear</b></summary>

The port wasn't detected from your server's output. Make sure your dev server prints a URL like `http://localhost:3000` to stdout or stderr.

</details>

<details>
<summary><b>Phone can't connect</b></summary>

- Ensure both devices are on the same WiFi network
- Check if your firewall is blocking the port
- Some public/corporate WiFi networks isolate devices

</details>

<details>
<summary><b>Command not found after install</b></summary>

Make sure your global npm bin is in your PATH:
```bash
npm config get prefix
# Add <prefix>/bin to your PATH if needed
```

</details>

---

## Contributing

PRs welcome! This is a simple tool — keep it that way.

```bash
git clone https://github.com/vaibhavjha-dev/qrfy.git
cd qrfy
npm link    # Makes 'qrfy' available globally from local code
```

---

## License

[MIT](LICENSE)

Made by [Vaibhav Jha](https://github.com/vaibhavjha-dev)
