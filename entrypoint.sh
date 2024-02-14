#!/bin/bash

yarn install

# If in development start the ts-node-dev version, else build and start the node version
if [ "${ENVIRONMENT}" = "development" ]
then
  yarn dev
else
  yarn build && yarn start
fi