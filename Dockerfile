FROM node:17 as development

WORKDIR /

COPY package*.json ./
COPY prisma ./prisma
RUN yarn install --only=development

COPY . .
RUN yarn prisma generate

EXPOSE 3000
CMD yarn start