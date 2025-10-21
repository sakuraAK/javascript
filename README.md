# Project Setup

Follow these steps to create a GitHub account, install required tools, and set up this project locally.

## 1. Create a GitHub account
1. Go to https://github.com and click "Sign up".
2. Complete the sign-up form and verify your email.
3. Create a new repository:
    - Click "New" (top-left) → give it a name (e.g., `js-first-try`) → choose Public or Private → Create repository.
4. Copy the repository URL (HTTPS or SSH) from the repo page.

## 2. Install Git
1. Download Git: https://git-scm.com/downloads and run the installer (accept defaults unless you have preferences).
2. Configure Git:
    ```
    git config --global user.name "Your Name"
    git config --global user.email "you@example.com"
    ```
3. Verify:
    ```
    git --version
    ```

## 3. Clone the repository locally
Open PowerShell or a terminal and run:
```
cd "C:\Users\andre\dev\javascript"
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git class-sessions
cd class-sessions
```
Replace the URL with your repo URL.

## 4. Install Node.js and npm
1. Download the LTS installer from https://nodejs.org and run it.
2. Verify:
    ```
    node -v
    npm -v
    ```

## 5. Install Visual Studio Code
1. Download VS Code: https://code.visualstudio.com and install.
2. Open the project folder:
    ```
    code .
    ```

## 6. Recommended VS Code extensions
Install these extensions from the Extensions view (Ctrl+Shift+X):
- ESLint
- Prettier - Code formatter
- GitLens — Git supercharged
- npm (or npm Intellisense)
- Live Server (optional)
- Path Intellisense
- Debugger for Microsoft Edge (or Debugger for Chrome)


## 7. Initialize the project
1. Create package.json:
    ```
    npm init -y
    ```
2. (Optional) Install lint/format tools:
    ```
    npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier
    npx eslint --init
    ```
3. Create a .gitignore (node_modules, .vscode, etc).

## 8. Commit and push initial code
```
git add .
git commit -m "chore: initial project setup"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

## 9. Quick troubleshooting
- If commands are not found, restart your terminal or machine to apply PATH changes.
- For permission or authentication issues use SSH keys or GitHub PAT (Personal Access Token) for HTTPS.

This README contains the minimal steps to get the project cloned, tools installed, and the workspace prepared. Adjust names/URLs and add project-specific scripts or dependencies as needed.