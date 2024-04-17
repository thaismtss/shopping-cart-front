FROM node:18-alpine as base

RUN apk add --no-cache g++ make py3-pip libc6-compat

WORKDIR /app

COPY yarn*.lock ./

RUN yarn install --frozen-lockfile

EXPOSE 3000


FROM base as dev
ENV NODE_ENV=development
COPY . .
CMD yarn run dev
