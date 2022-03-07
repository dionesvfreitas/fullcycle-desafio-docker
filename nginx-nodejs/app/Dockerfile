FROM node:14

WORKDIR /usr/app
COPY package*.json .
RUN npm install -y

COPY index.js .

CMD [ "node", "index.js" ]