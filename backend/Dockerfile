# https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
FROM node:lts-alpine

# Create application directory
WORKDIR /usr/src/app

# Install application dependencies
COPY package.json .
RUN npm install --silent

# Bundle application source
COPY . /usr/src/app

# Run compiler
RUN npx tsc -p /usr/src/app/tsconfig.json

# Expose port 3000
EXPOSE 3000

# Run the application
CMD ["node", "dist/server.js"]
