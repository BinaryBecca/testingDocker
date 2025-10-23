# #Build Phase
FROM node:24-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# #Serve Phase
FROM nginx:alpine AS runner
# FROM busybox:1.30 AS runner
WORKDIR /app
COPY --from=builder /app/dist .
# CMD ["busybox", "httpd", "-f", "-v", "-p", "8080"]
CMD ["nginx", "-g", "daemon off;"]

# #Terminal
# docker build -t [name]
# docker run -d -p 8080:80 [name]

# #Alte Contaier stoppen: 
# docker stop [container-name]

# #Laufende Container anzeigen
# docker ps