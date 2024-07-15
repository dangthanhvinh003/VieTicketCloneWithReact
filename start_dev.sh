#!/bin/sh

# Start json-server in the background
npx json-server --watch db.json -p 8080 &

npm start &

JSON_SERVER_PID=$!
NPM_START_PID=$!

trap "echo 'Stopping...'; kill $JSON_SERVER_PID $NPM_START_PID" EXIT

wait