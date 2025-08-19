# 1. fázis: build
FROM node:22-alpine AS build
WORKDIR /app

COPY package*.json ./
# Ha van lockfile, jobb a ci:
RUN npm ci || npm install

COPY . .
RUN npm run build

# 2. fázis: serve Nginx-szel
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
