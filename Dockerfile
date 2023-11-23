FROM node:21 as builder
WORKDIR /build
COPY ./package.json /build/package.json
RUN npm install

FROM alpine
RUN apk add --upgrade nodejs
WORKDIR /app
COPY --from=builder /build /app
COPY ./src /app/src
EXPOSE 8080
CMD ["node", "./src/index.js"]