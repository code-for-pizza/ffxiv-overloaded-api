FROM node:14.17.5-alpine
ENV NODE_ENV=production

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

EXPOSE $PORT

CMD ["yarn", "migrate:update", "&&", "yarn", "start"]

# docker-compose build --no-cache
# docker image tag ffxiv-overloaded-api_service-staging keithfrancisb/ffxiv-overloaded-api_service-staging
# docker image push keithfrancisb/ffxiv-overloaded-api_service-staging