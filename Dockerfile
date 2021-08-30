FROM node:14.17.5-alpine
ENV NODE_ENV=production

WORKDIR /app

COPY package.json .
COPY yarn.lock .
COPY tsconfig.json .

RUN yarn install

COPY . .

EXPOSE $PORT

CMD ["yarn", "start"]
