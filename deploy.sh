#!/usr/bin/env bash
set -e
cd "$(dirname "$0")"
git pull
docker compose up -d --build
docker image prune -f
docker ps --filter name=portfolio-app