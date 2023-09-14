FROM node:18.15.0-alpine

WORKDIR /frontend

EXPOSE 3000

COPY package.json /frontend

RUN npm install

COPY . /frontend

RUN npm run build

CMD ["npm", "run", "preview"]

