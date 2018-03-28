FROM node:carbon-alpine

WORKDIR /app
COPY package.json yarn.lock /app/
RUN yarn install --pure-lockfile

COPY . /app/
RUN yarn build

EXPOSE 1234

ENTRYPOINT ["yarn"]
CMD ["start:server"]
