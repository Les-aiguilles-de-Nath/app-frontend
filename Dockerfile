FROM node:16-alpine3.14 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm run generate

FROM caddy as production-stage
COPY --from=build-stage /app/.output/public/ /usr/share/caddy
EXPOSE 80