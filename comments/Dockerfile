FROM node:alpine

WORKDIR /app

COPY ./package.* ./

RUN npm install

COPY ./ ./

CMD [ "npm"  , "start" ]
