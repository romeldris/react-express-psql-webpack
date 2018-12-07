FROM node:8.11.0

COPY package.json /tmp/package.json
RUN cd /tmp && npm install

RUN mkdir -p /app && cp -a /tmp/node_modules /app
WORKDIR /app
COPY . /app
RUN npm run build:client && npm run build:server

EXPOSE 8080

CMD ["npm", "run", "server"]
