FROM node:alpine

COPY main.js package.json ./

RUN npm run build

CMD ["node", "main.js"]