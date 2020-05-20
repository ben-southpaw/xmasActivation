#!/bin/bash

mkdir ~/.aws | true

#
# .aws/config
#
echo "[default]" > ~/.aws/config
echo "output = json" >> ~/.aws/config
echo "region = eu-central-1" >> ~/.aws/config

#
# .aws/credentials
# NOTE: this isn't working, removed 'profile' key from .elasticbeanstalk/config.yml
echo "[default] " > ~/.aws/credentials
echo "aws_access_key_id = $AWS_ACCESS_KEY_ID" >> ~/.aws/credentials
echo "aws_secret_access_key = $AWS_SECRET_ACCESS_KEY" >> ~/.aws/credentials