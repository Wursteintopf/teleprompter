# Start with a base node image
FROM node:18
WORKDIR /

# Copy the needed files in here
COPY ./package.json ./
COPY ./yarn.lock ./
COPY ./tsconfig.json ./
COPY ./next.config.mjs ./
COPY ./public ./public
COPY ./src ./src

# Run yarn install
RUN yarn config set network-timeout 600000 -g
RUN yarn install

# Copy entrypoint script
COPY ./entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/entrypoint.sh

# Set entrypoint
ENTRYPOINT ["entrypoint.sh"]