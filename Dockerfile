# Use a lightweight Node.js image
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Copy files
COPY src/package.json src/package-lock.json ./
RUN npm install
COPY src/ .

# Expose the app port
EXPOSE 3000

# Run the application
CMD ["npm", "start"]