#!/bin/bash

# Change directory to the website root
WEBSITE_CODEDEPLOY_TMP="/opt/codedeploy-agent/deployment-root/$DEPLOYMENT_GROUP_ID/$DEPLOYMENT_ID/deployment-archive"
cd $WEBSITE_CODEDEPLOY_TMP

# Copy the environment file
sudo ln -s /home/ec2-user/env/website .env

# Debug
sudo pwd
sudo ls -la

# Install dependencies
sudo pnpm install --prod

# Build the application
sudo pnpm run build
