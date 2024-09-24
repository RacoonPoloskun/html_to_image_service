FROM node:18

ENV NODE_ENV=$APP_ENV

RUN apt-get update \
	&& apt-get install -y chromium

RUN mkdir /usr/src/cache
WORKDIR /usr/src/cache

COPY package.json ./
COPY package-lock.json ./
RUN npm install

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY . .
EXPOSE 3780
