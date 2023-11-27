#!/bin/bash

# Change directory to the website root
WEBSITE_CODEDEPLOY_TMP="/opt/codedeploy-agent/deployment-root/$DEPLOYMENT_GROUP_ID/$DEPLOYMENT_ID/deployment-archive"
WEBSITE_CODEDEPLOY_DIR="/home/ec2-user/website"
cd $WEBSITE_CODEDEPLOY_TMP

# Copy the environment file
sudo ln -s "$WEBSITE_CODEDEPLOY_DIR/.env" .env

# Debug
sudo pwd
sudo ls -la

# Install dependencies
sudo pnpm install --prod

# Build the application
sudo pnpm run build
