#use the node base image
FROM node:18-alpine

#Setup the working directory
WORKDIR /

#Copy the package,jon contents
COPY package*.json ./

#Install the dependencies
RUN npm install

#Copy all of the file and folders in the project
COPY . .

#Expose a port for the container to run on
EXPOSE 3000

#Run the application
CMD ["node", "app.js"]