FROM node:14.5.0

LABEL "container"="Charisma Site" \
"version"="0.0.0" \
"env"="testing"

WORKDIR /usr/site/app

COPY . .
RUN yarn install
RUN yarn build

CMD ["/bin/bash", "-c", "yarn start"]