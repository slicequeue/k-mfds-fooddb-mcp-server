# Generated by https://smithery.ai. See: https://smithery.ai/docs/build/project-config
FROM node:lts-alpine

WORKDIR /app

# Install dependencies and build
COPY package.json package-lock.json tsconfig.json tsup.config.ts ./
COPY src ./src

RUN npm ci --ignore-scripts \
    && npm run build

# Default command
CMD ["node", "dist/index.js"]
