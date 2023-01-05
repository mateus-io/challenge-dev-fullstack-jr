FROM node:14-alpine

ADD . /usr/src/backend

WORKDIR /usr/src/backend

RUN echo "Installing dependencies" && npm install --force

RUN echo "Build" && npm run build

EXPOSE 4000

CMD npm start
