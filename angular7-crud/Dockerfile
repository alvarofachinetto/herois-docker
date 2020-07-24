FROM node:11.15.0-alpine as angular
WORKDIR /app
COPY package.json /app
COPY package.json package.json
RUN npm i --silent
COPY . .
RUN npm run-script build

FROM nginx:alpine
VOLUME /var/cache/nginx
COPY  --from=angular app/dist/angular7-crud /usr/share/nginx/html
COPY ./conf/nginx.conf /etc/ngix/conf.d/default.conf 
