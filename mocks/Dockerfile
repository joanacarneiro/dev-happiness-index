FROM node:16-alpine

WORKDIR /app

COPY mocks/package.json mocks/package-lock.json ./
RUN npm install
COPY mocks/ .

EXPOSE 8081

CMD ["npm", "start"]