#!/bin/bash

# Change directory to the website root
cd /home/ec2-user/website

# Copy the environment file
sudo ln -s /home/ec2-user/env/website .env

# Debug
sudo pwd
sudo ls -la

# Install dependencies
sudo pnpm install --prod

# Build the application
sudo pnpm run build
