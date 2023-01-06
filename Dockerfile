FROM node:12

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# Compile TypeScript to JavaScript
RUN npm run build

# Expose the port the app will run on
EXPOSE 8080

# Run the app
CMD [ "node", "build/index.js" ]
