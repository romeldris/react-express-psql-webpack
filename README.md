## Running

### Docker

If you have docker installed:

```
$ docker-compose up -d
```

### Without Docker

```
# start local image of postgres
$ ./bin/startLocalDBs.sh

# install npm dependencies
$ npm install

# build client and server
$ npm run build:client && npm run build:server

# run
$ npm run server
```

### Development

```
$ npm run dev
```

You can then view the app running on [localhost:8080](localhost:8080)
