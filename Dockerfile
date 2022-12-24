FROM node:lts-alpine as dev
ENV NODE_ENV=dev
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 4000
RUN chown -R node /usr/src/app
USER node
CMD ["node", "truffle-config.js"]
