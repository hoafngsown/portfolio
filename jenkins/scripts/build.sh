#!/usr/bin/env sh
echo "Jenkins Build Stage Using Docker"

export PATH="/usr/local/bin:$PATH"

docker ps -

cat $ENV_FILE

docker build -t portfolio:latest 

docker login -u $DOCKER_HUB_USERNAME -p $DOCKER_HUB_PASSWORD

docker push hoafngxown/portfolio:latest 