# Use the node image from official Docker Hub
FROM node:22-alpine AS build-stage
# set the working directory
WORKDIR /app
# Copy the working directory in the container
COPY package*.json ./
# Install the project dependencies
RUN npm install
# Copy the rest of the project files to the container
COPY . .
# Build the Vue.js application to the production mode to dist folder
RUN npm run build

# Use the lightweight Nginx image from the previous stage for the nginx container
FROM nginx:stable-alpine AS production-stage
# Copy the build application from the previous stage to the Nginx container
COPY --from=build-stage /app/dist /usr/share/nginx/html
# Running the script at container run
COPY ./comtuveu.sh /docker-entrypoint.d/comtuveu.sh
RUN chmod +x /docker-entrypoint.d/comtuveu.sh
COPY ./start.sh /start.sh
RUN chmod +x /start.sh
# Expose the port 80
EXPOSE 80
# Start Nginx to serve the application
CMD ["/start.sh"]