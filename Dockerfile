# Use official Node.js 20 image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the project
COPY . .

# Build the app
RUN npm run build

# Expose port 5173 for Vite
EXPOSE 5173

# Start app in preview mode (serve build)
CMD ["npx", "serve", "-s", "dist", "-l", "5173"]