FROM node:14.17-alpine

WORKDIR /app

COPY package.json .
# ! bcrypt dependecy - From version 4.0.1 we have started to provide pre-build library for musl libc and following recompiling step would be unnecessary. However, it's still experimental release and you may want to have recompiling step to make sure it works for your environment.
RUN apk --no-cache add --virtual builds-deps build-base python
# install dependecies
RUN yarn

COPY . .
# compile TS to JS 
RUN yarn build

EXPOSE 3000
# run as native js
CMD yarn start
