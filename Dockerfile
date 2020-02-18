FROM node:10-alpine AS base

USER node

# Create working directory.
RUN mkdir /home/node/app
WORKDIR /home/node/app

FROM base AS yarn-dependencies

# Add yarn, gcc and git support for native dependencies.
USER root
RUN apk --no-cache --virtual build-dependencies add g++ gcc git make python openssh-client yarn
USER node

# Configure GitHub SSH key.
COPY --chown=node:node id_rsa /home/node/.ssh/id_rsa
RUN chmod 600 /home/node/.ssh/id_rsa \
  && ssh-keyscan github.com >> /home/node/.ssh/known_hosts \
  && eval `ssh-agent -s` \
  && ssh-add /home/node/.ssh/id_rsa

# Install dependencies.
COPY --chown=node:node package.json yarn.lock /home/node/app/
RUN yarn install --force

# Build.
COPY --chown=node:node . ./
RUN NODE_ENV=production yarn build

# Remove GitHub SSH key.
RUN rm -f id_rsa

FROM base AS build

# Copy application folder.
COPY --chown=node:node --from=yarn-dependencies /home/node/app /home/node/app

# Run server.
CMD node lib/server/bin/index.js
