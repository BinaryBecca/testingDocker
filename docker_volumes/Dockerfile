FROM node:18

WORKDIR /app

COPY . .
RUN npm install

CMD ["node", "index.js"]

EXPOSE 3000

#  docker build -t 01_dockervolumes .
# docker run -p 5000:3000 01_dockervolumes