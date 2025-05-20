# Use an official node image as a base
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code
COPY . ./

# Build the application
RUN npm run build

# Expose the port
EXPOSE 3000

# Start the server
CMD ["npm", "start"]

# Disable telemetry
ENV NEXT_TELEMETRY_DISABLED=1
