# Dockerfile for Container 2 (Node.js Client)
FROM node:14

WORKDIR /app

COPY package.json /app
RUN npm install

COPY client.js /app

CMD ["npm", "start"]
