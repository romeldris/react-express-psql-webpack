#!/bin/bash

docker start projectdb || docker run -p 5435:5432/tcp --name projectdb -e POSTGRES_PASSWORD=project -e POSTGRES_USER=project -d postgres
