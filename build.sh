#!/bin/bash

# build client
docker build -f ./client/Dockerfile -t shockwater/blog-client:0.0.1 ./client

# build comments service
docker build -f ./comments/Dockerfile -t shockwater/blog-comments:0.0.1 ./comments

# build event bus service
docker build -f ./event-bus/Dockerfile -t shockwater/blog-event-bus:0.0.1 ./event-bus

# build moderation service
docker build -f ./moderation/Dockerfile -t shockwater/blog-moderation:0.0.1 ./moderation

# build posts service
docker build -f ./posts/Dockerfile -t shockwater/blog-posts:0.0.1 ./posts

# build query service
docker build -f ./query/Dockerfile -t shockwater/blog-query:0.0.1 ./query