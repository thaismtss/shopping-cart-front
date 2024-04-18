FROM node:18-alpine as base

RUN apk add --no-cache g++ make py3-pip libc6-compat

WORKDIR /app

COPY yarn*.lock ./

EXPOSE 3000


FROM base as dev
ENV NODE_ENV=development
COPY . .
RUN yarn install
CMD yarn run dev
