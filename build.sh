#!/bin/bash

# build client
docker build -f ./client/Dockerfile -t shockwater/blog-client ./client

# build comments service
docker build -f ./comments/Dockerfile -t shockwater/blog-comments ./comments

# build event bus service
docker build -f ./event-bus/Dockerfile -t shockwater/blog-event-bus ./event-bus

# build moderation service
docker build -f ./moderation/Dockerfile -t shockwater/blog-moderation ./moderation

# build posts service
docker build -f ./posts/Dockerfile -t shockwater/blog-posts ./posts

# build query service
docker build -f ./query/Dockerfile -t shockwater/blog-query ./query
