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
9. Press Ctrl+C to stop the server.
10. To exit the container, click on the green `><` icon again and "Reopen Folder" elsewhere. Alternatively, you can also select "Close Remote Connection".
---

## Development

### Stay in the Container
Make sure that you stay in the container while you are developing since everything you need is in there. The container not only has the project dependencies installed and usable, but the VS Code extensions that makes developing in this project easy and helpful (i.e. Code auto-formatter and DB interactions outside of server) are also already installed in the container.

### Keep Server running
You will want to have the command `yarn watch` running. This will ensure that the server is running and any code changes you make will restart the server with your new changes.

### Git Gud
It is highly recommended that you commit your changes regularly whenever you get something to successfully work. This ensures that if, for whatever reason, you broke your code, you have a previously working code to fallback to. It's essentially a quick-save before its game over.

### Database Resets
If you need to wipe the data in the database clean follow the following steps:
1. Exit and stop the container.
2. Open Docker Desktop.
3. Go to the "Container/Apps" list.
4. Stop all the containers in the "ffxiv-overloaded-api_devcontainer" app.
5. Delete all the containers in the "ffxiv-overloaded-api_devcontainer" app.
6. Go to the "Volumes" list.
7. Delete the volume "ffxiv-overloaded-api_devcontainer_postgres-data".
8. Reopen the project in the container again with a fresh new database.