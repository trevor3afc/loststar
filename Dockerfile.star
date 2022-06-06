FROM node:lts-alpine
WORKDIR /app
COPY ./dist .
COPY package.json package-lock.json ./
ENV PORT=3000
EXPOSE ${PORT}
RUN npm install --production
RUN npm install reflect-metadata tslib
CMD node ./packages/star/main.js