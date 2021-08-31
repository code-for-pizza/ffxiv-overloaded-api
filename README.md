# FFXIV Overloaded API

## Initial Clone
This repository utilizes Docker to develop, build, and deploy in containers. This allows all developers to work in the same development environment without having to install, maintain, and manage dependencies within their local machine for projects.

### Pre-requisites
 - [Git](https://git-scm.com/downloads) [(Optional GUI)](https://desktop.github.com/)
 - [VS Code](https://code.visualstudio.com/)
 - [Docker](https://www.docker.com/products/docker-desktop)
 - [VS Code Remote Containers Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

 - Windows Requirement
    - [Windows Subsystem for Linux 2 (WSL 2)](https://docs.docker.com/desktop/windows/wsl/)
    - [Microsoft Installation Guide](https://docs.microsoft.com/en-us/windows/wsl/install-win10)
    - [Hyper-V Setup Guide](https://docs.microsoft.com/en-us/archive/blogs/canitpro/step-by-step-enabling-hyper-v-for-use-on-windows-10)

### Steps
1. Clone Repository
    - If you're using the terminal for Git you can clone this repository by running the following command:

      `git clone https://github.com/code-for-pizza/ffxiv-overloaded-api.git`
    - Make sure you are in the correct directory where you want the project to live before cloning.
2. Open the project in VS Code.
3. Once you have the required extension installed, click on the green `><` icon on the bottom left of VS Code.
4. Select "Reopen in Container".
5. Wait until VS Code has successfully opened the project in the container.
6. A terminal should open at the bottom of the window. The following message should indicate that you are successfully in a container.
```
Done. Press any key to close the terminal.
```
7. Open a terminal (Ctrl+Shift+\`) and run the command `yarn watch`.
8. Visiting http://localhost:3002/graphql in the browser should open the playground for the server locally.

