FROM mhart/alpine-node:16.4
WORKDIR /
COPY ./package.json ./
RUN npm install
COPY ./src ./src
EXPOSE 8080
CMD ["npm", "start"]