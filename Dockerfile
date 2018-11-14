FROM node:10

COPY . /usr/src/app

EXPOSE 3000
EXPOSE 3001

CMD ["yarn", "yarn run start"]