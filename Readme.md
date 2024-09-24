# HTML to Image Service

A simple API service that runs in Docker and converts HTML to an image

## Build & Start:
```shell
docker-compose up -d
```

## Usage:

#### Health Check
```shell
curl --location 'http://localhost:3780/healthz'
```

#### Convert HTML to Image
```shell
curl --location 'http://localhost:3780/api/v1/toImage' \
--header 'Content-Type: application/json' \
--data '{
    "html": "<h1>Hello world!</h1>"
}'
```
