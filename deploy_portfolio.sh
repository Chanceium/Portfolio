#!/bin/bash

# Stop the running container
#sudo docker container stop portfolio

# Remove the old image
sudo docker image rm viteportfolio -f

# Build the new image
sudo docker build -t viteportfolio .

# Run the new container
#sudo docker run -d --rm -p 5173:8080 --name portfolio viteportfolio
