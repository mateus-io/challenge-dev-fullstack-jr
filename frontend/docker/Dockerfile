FROM node:17-alpine3.14

ADD . /usr/src/frontend

WORKDIR /usr/src/frontend

RUN echo "Installing Dependencies" && npm install --force

RUN echo "Build" && npm run build

EXPOSE 4173

CMD npm run preview
