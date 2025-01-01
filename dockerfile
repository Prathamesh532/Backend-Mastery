# Use a specific Node.js version with Alpine for a smaller image
FROM node:23-alpine3.20

# Set the working directory inside the container
WORKDIR ./

# Copy only package.json and package-lock.json for better caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Expose the application port (optional, adjust if your app uses a different port)
COPY . .

# Command to run the application
CMD ["node", "server.js"]