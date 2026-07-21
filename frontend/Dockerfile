# Stage 1 — build the app into static files
FROM node:22-alpine AS build
WORKDIR /app
RUN npm install -g npm@11 tar@7.5.19
COPY package*.json ./
RUN npm ci --legacy-peer-deps
COPY . .
RUN npm run build

# Stage 2 — small image that only serves the build
FROM node:22-alpine
WORKDIR /app
RUN npm install -g npm@11 vite@7 tar@7.5.19 && npm cache clean --force
COPY --from=build /app/dist ./dist
COPY vite.preview.config.js ./vite.config.js
EXPOSE 4173
CMD ["vite", "preview", "--host", "0.0.0.0", "--port", "4173"]
