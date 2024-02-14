#!/usr/bin/env bash
# This script will be executed on the server each time upon deploy

# Stop the container, rebuild it with any new changes and start it back up
/usr/bin/docker compose down && /usr/bin/docker compose up --build -d > deploy.log 2>&1
