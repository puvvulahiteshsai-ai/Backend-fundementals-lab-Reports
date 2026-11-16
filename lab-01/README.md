# Lab 1: Node.js and Express Server

## Student information

- **Name:** P.Hitesh sai
- **Registration number:** 252U1R9135
- **Section:** S-26
## Deployment

- Live deployment URL: https://lab-01-mauve.vercel.app/


## Project objective

Build a small web server using Node.js and Express. The server responds to three known GET routes, returns the current date and time, and sends a 404 response for unknown routes.

## Prerequisites

- Node.js and npm installed on your computer. npm is included with Node.js.
- A web browser.
- A terminal such as PowerShell, Command Prompt, or the VS Code integrated terminal.
- Git and a GitHub account for submission.

To check that Node.js and npm are available, run:

```powershell
node --version
npm --version
```

## Install and run

Open a terminal in this `lab-01` folder. If your terminal starts in the parent project folder, change to the lab folder first:

```powershell
cd "lab-01"
```

Install the dependencies listed in `package.json` and `package-lock.json`:

```powershell
npm install
```

Start the server:

```powershell
npm start
```

The terminal should print the local server address. Keep this terminal open while testing; press **Ctrl+C** in it when you want to stop the server.

If port 3000 is already in use, either stop the other server or choose another port in PowerShell before starting this app:

```powershell
$env:PORT = "3001"
npm start
```

Use `http://localhost:3001` for testing in that case. The environment variable applies only to that PowerShell session.

## Endpoints

| HTTP method | URL path | Description | Expected status |
|---|---|---|---:|
| GET | `/` | Displays a welcome message. | 200 |
| GET | `/about` | Returns the student name and section as JSON. | 200 |
| GET | `/time` | Returns the current date and time as JSON. | 200 |
| GET | Any unknown path, such as `/not-found` | Displays a not-found message. | 404 |

## Test in a browser

With the server running, open each URL in your browser:

- <http://localhost:3000/>
- <http://localhost:3000/about>
- <http://localhost:3000/time>
- <http://localhost:3000/not-found>

The first three URLs should return the results described in the endpoint table. The last URL deliberately uses an unknown path and should return the 404 message. If you configured a different port, replace `3000` with that port.

## Check HTTP status codes in Chrome Developer Tools

1. Open one of the endpoint URLs in Chrome.
2. Open Developer Tools with **F12** or **Ctrl+Shift+I**.
3. Select the **Network** tab. If needed, reload the page while the tab is open.
4. Select the request for the page (often shown as `localhost` or the requested path).
5. Find **Status Code** in the **Headers** pane. Confirm `200` for the three valid routes and `404` for `/not-found`.

## Screenshots

Screenshots of the working application are stored in the `screenshots/` directory.

### 1. Home Route

![Home Route](./screenshots/home.png)

### 2. About Route

![About Route](./screenshots/about.png)

### 3. Time Route

![Time Route](./screenshots/time.png)

### 4. Unknown Route — 404 Not Found

![404 Route](./screenshots/not-found.pngng)
## Notes: problems faced and solutions

Record any issues you encounter and how you resolved them. For example:

- **Problem:** [Describe the problem.]
- **Solution:** [Describe what fixed it.]
