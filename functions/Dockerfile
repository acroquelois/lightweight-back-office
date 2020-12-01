FROM node:12-alpine

WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .

ENV HASURA_SERV_URL="http://host.docker.internal:9100"
ENV ELASTIC_SERV_URL="http://host.docker.internal:9200"
ENV PORT=9500
EXPOSE 9500
CMD [ "node", "index.js" ]