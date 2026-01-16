# Build stage
FROM node:22-alpine AS builder

WORKDIR /app

# Build arguments for environment variables
ARG VITE_PADDLE_CLIENT_TOKEN

# Set environment variables for build
ENV VITE_PADDLE_CLIENT_TOKEN=$VITE_PADDLE_CLIENT_TOKEN

# Copy package files and npm config
COPY package.json package-lock.json .npmrc ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the app
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
