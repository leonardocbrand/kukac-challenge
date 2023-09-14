FROM node:18.15.0-alpine

WORKDIR /backend

EXPOSE 5000

COPY package.json /backend

RUN npm install

COPY . /backend

CMD ["npm", "start"]
