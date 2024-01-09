# Use an official Node.js runtime as a parent image
FROM node:20-alpine

# Install Yarn package manager
RUN apk add --no-cache npm

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and yarn.lock files to the container
COPY package*.json  ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code to the container
COPY . .

# Expose port 3000 for the API
EXPOSE 3001

# Start the API server
CMD [ "npm", "start" ]
