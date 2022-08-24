FROM node:alpine

COPY ./webapp/main.js ./webapp/package.json ./

RUN npm run build

CMD ["node", "main.js"]