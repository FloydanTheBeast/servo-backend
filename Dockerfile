FROM node:17.4.0-alpine3.14 as development
WORKDIR /
COPY package*.json ./
RUN npm install --only=development
COPY . .
CMD npm start