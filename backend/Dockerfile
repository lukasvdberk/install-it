FROM node:16-alpine

WORKDIR /app

COPY package*.json /app

RUN npm install

# build admin panel and such
#RUN ["npm", "run", "build"] # No custom admin panel yet so we don't need to start it

CMD ["node", " node_modules/@strapi/strapi/bin/strapi.js", "start"]
#CMD ["npm", "run", "start"]
