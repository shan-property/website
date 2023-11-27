#!/bin/bash

# Debug
sudo pwd
sudo ls -la

# Install dependencies
sudo pnpm install --prod

# Build the application
sudo pnpm run build
