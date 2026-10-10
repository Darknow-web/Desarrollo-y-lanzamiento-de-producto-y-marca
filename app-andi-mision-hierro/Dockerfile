# App "Andi, Misión Hierro" para Google Cloud Run.
# Si Docker Hub limita las descargas, usa: --build-arg NODE_IMAGE=mirror.gcr.io/library/node:22-slim
ARG NODE_IMAGE=node:22-slim
FROM ${NODE_IMAGE} AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM ${NODE_IMAGE}
ENV NODE_ENV=production PORT=8080 DATA_DIR=/tmp/andi-datos
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev && npm cache clean --force
COPY --from=build /app/dist ./dist
COPY server ./server
COPY data/seed.json ./data/seed.json
USER node
EXPOSE 8080
CMD ["node", "server/index.js"]
