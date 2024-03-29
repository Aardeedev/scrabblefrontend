FROM node:10.17.0

# Create app directory
WORKDIR /usr/src/app

# Expose port for service
EXPOSE 5000

# Install and configure `serve`.
RUN npm install -g serve

# Copy source code to image
COPY . .

# Install dependencies
RUN npm install

# Build app and start server from script
CMD ["npm", "run", "start:prod"]
