FROM node:18.17.1

WORKDIR /app

COPY . .

RUN rm -rf node_modules
RUN npm i

COPY .env ./

EXPOSE 3000


CMD ["npx", "ts-node", "src/server.ts"]
