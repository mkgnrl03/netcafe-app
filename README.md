# NetCafe-App 

## How to run this application?


### Clone Repository

```bash

git clone https://github.com/mkgnrl03/netcafe-app.git
cd netcafe-app

# Make sure to install dependencies
pnpm install

```

### Imoprtant Step

Before running this application, make sure install the Tauri prerequisites here: `https://v2.tauri.app/start/prerequisites/`


### Install Rust
If you haven't installed Rust yet, you can do so with the following command:

```bash

# Linux and macOS
curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh

# Windows
winget install --id Rustlang.Rustup


# Checked if correct toolchain is installed
rustup default stable-msvc

```


### Build and Run 

```bash

# build the app 
pnpm nuxi generate

# Run with tauri command (local)
pnpm tauri dev

```