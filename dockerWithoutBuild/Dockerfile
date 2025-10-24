# #Build Phase
# node.js > build in container
FROM node:24-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# #Serve Phase
FROM nginx:alpine AS runner
WORKDIR /app
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# #Terminal
# docker build -t [name]
# docker run -d -p 8080:80 [name]

# #Alte Container stoppen: 
# Einzeln: docker stop [container-name]
# Alle: docker stop $(docker ps -q)

# #Laufende Container anzeigen
# docker ps

# #Image Name herausfinden
#  docker images --digests

# https://sliplane.io/blog/how-to-dockerize-vite