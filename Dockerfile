# Start with a base node image
FROM node:18
WORKDIR /

# Copy the needed files in here
COPY ./teleprompter/ ./teleprompter

# Copy entrypoint script
COPY ./entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/entrypoint.sh

# Go to teleprompter directory
WORKDIR /teleprompter

# Run yarn install
RUN yarn config set network-timeout 600000 -g
RUN yarn install

# Set entrypoint
ENTRYPOINT ["entrypoint.sh"]