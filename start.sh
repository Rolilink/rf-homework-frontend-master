#!/usr/bin/env sh
yarn workspace @rainforesthq/api run start &
server_pid=$!
killserver() {
    kill -9 $server_pid
}
trap killserver EXIT

yarn workspace @rainforesthq/app run start-dev
