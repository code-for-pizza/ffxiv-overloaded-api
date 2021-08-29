FROM node:14.17.5-alpine
ENV NODE_ENV=staging

WORKDIR /app

COPY ./package.json .

RUN yarn install

COPY . .