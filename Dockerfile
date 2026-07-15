FROM node:20-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:1.25-alpine AS serve

RUN apk upgrade --no-cache \
    && addgroup -S webapp && adduser -S -G webapp webapp \
    && rm -rf /usr/share/nginx/html/* \
    && chown -R webapp:webapp /usr/share/nginx/html /var/cache/nginx /etc/nginx/conf.d

COPY --from=build --chown=webapp:webapp /app/dist /usr/share/nginx/html
COPY --chown=webapp:webapp nginx.main.conf /etc/nginx/nginx.conf
COPY --chown=webapp:webapp nginx.conf /etc/nginx/conf.d/default.conf

USER webapp

EXPOSE 60001

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget -q --spider http://127.0.0.1:60001/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
