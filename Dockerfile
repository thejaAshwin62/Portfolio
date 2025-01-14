FROM node:20.15.0-alpine

WORKDIR /usr/src/app

COPY ./package.json .
COPY ./package-lock.json .

RUN npm install --force

COPY . .

EXPOSE 3000

CMD { "npm","run","start-watch" }