#!/bin/bash

# Change directory to user home
cd /home/ec2-user/

# Stop the currently running application
sudo pm2 stop all