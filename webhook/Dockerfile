# Author: acroquelois
# Date: 03/02/2021

FROM node:lts-alpine
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 5000
CMD [ "node", "lib/index.js" ]