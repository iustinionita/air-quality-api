FROM node:17-slim
WORKDIR /weather-api
COPY . .
RUN npm install
CMD ["node", "index.js"]