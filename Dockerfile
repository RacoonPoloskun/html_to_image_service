FROM node:18

ENV NODE_ENV=$APP_ENV

RUN apt-get update && apt-get install -y --no-install-recommends \
    chromium \
    libc6 \
    libnss3 \
    libx11-xcb1 \
    libxcomposite1 \
    libxcursor1 \
    libxdamage1 \
    libxi6 \
    libxtst6 \
    libatk1.0-0 \
    libatk-bridge2.0-0 \
    libcups2 \
    libdrm2 \
    libxrandr2 \
    libgbm1 \
    libasound2 \
    && rm -rf /var/lib/apt/lists/*

RUN mkdir /usr/src/cache
WORKDIR /usr/src/cache

COPY package.json package-lock.json ./
RUN npm install

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY . .

EXPOSE 3780
