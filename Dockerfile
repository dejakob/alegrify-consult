FROM node:10

COPY . /usr/src/app
WORKDIR /usr/src/app

EXPOSE 3000
EXPOSE 3001

RUN npm i
CMD npm start