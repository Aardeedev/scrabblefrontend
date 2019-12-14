FROM node:10.16.0-alpine

# Create app directory
RUN mkdir -p /src/app
WORKDIR /src/app

RUN npm install -g pushstate-server

# Bundle app source
COPY . /build

EXPOSE 9000

# defined in package.json
CMD [ "npm", "run", "start:prod" ]    