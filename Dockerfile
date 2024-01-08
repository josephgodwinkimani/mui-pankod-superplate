FROM node:16.20.2-slim

# Set working directory
WORKDIR /app

# Set NODE_ENV to development
ENV NODE_ENV=development

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm && pnpm install

COPY . .

# Set the environment variable to enable hot reload
ENV CHOKIDAR_USEPOLLING=true

# Expose port 3000
EXPOSE 3000

CMD [ "pnpm", "dev" ]