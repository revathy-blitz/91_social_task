FROM node:11-alpine

ARG DEPLOYMENT_ENVIRONMENT

ENV PORT="${PORT}"
ENV NODE_ENV="${NODE_ENV}"
ENV API_URL="https://api.spacexdata.com"

ADD package.json /
COPY . .

RUN echo "Checking to see if replace is needed for Production URLS..." && \
    if [[ "${DEPLOYMENT_ENVIRONMENT}" == "prod" ]]; then echo "Production environment detected - performing replace on Production URLs..."; set -x; export API_URL="https://api.spacexdata.com";  set +x; else echo "Build is for ${DEPLOYMENT_ENVIRONMENT} - not performing replace on Production URLs."; fi && \
    apk add --update git && \
    yarn cache clean --force && \
    yarn install && \
    yarn upgrade && \
    npm run build

EXPOSE 80

CMD npm run start
