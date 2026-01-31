#!/bin/bash
API_KEY=$1
FILE_PATH=$2

curl -X POST https://upload.heygen.com/v1/asset \
  -H "X-Api-Key: $API_KEY" \
  -F "file=@$FILE_PATH" \
  -F "type=image"
