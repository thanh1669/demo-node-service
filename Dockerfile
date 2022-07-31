FROM node:14-alpine

LABEL author="thanh1669@gmail.com"

WORKDIR /app

RUN apk --no-cache add \
    g++ make python3 git \
    && yarn global add node-gyp \
    && rm -rf /var/cache/apk/*

ADD package.json yarn.lock /app/
RUN yarn --pure-lockfile
RUN yarn install 

ADD . /app

CMD ["yarn", "start"]