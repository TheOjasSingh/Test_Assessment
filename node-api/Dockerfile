# Dockerfile for Container 1 (Node.js REST API)
FROM node:14

WORKDIR /app

COPY package.json /app
RUN npm install

COPY app.js /app

EXPOSE 3000

CMD ["npm", "start"]
