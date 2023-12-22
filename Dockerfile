FROM node:latest

WORKDIR /app/server

COPY . .

RUN npm install

CMD ["npm", "start"]
