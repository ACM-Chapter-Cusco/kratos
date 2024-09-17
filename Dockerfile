FROM node:22-alpine3.19 AS base
WORKDIR /code
COPY package.json .

FROM base AS installer
RUN npm install

FROM installer AS build
COPY . .
RUN npm run build


