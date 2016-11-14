FROM node:wheezy
MAINTAINER Nahuel Veron <nahuelav96@gmail.com>

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install Dependences
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

# Run application
CMD ["npm", "start"]
