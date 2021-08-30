FROM node:14.17.5-alpine
ENV NODE_ENV=staging

WORKDIR /app

COPY ./package.json .

RUN yarn install

COPY . .

EXPOSE 3001

CMD ["yarn", "migrate:update", "&&", "yarn", "start"]

# docker-compose build --no-cache
# docker image tag ffxiv-overloaded-api_service-staging keithfrancisb/ffxiv-overloaded-api_service-staging
# docker image push keithfrancisb/ffxiv-overloaded-api_service-staging