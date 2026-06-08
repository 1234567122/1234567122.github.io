FROM php:8.2-cli-alpine

WORKDIR /app

RUN apk add --no-cache unzip \
  && docker-php-ext-install opcache

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer
COPY composer.json composer.lock* ./
RUN composer install --no-dev --prefer-dist --no-interaction --optimize-autoloader || composer install --no-dev --no-interaction --optimize-autoloader

COPY . .

EXPOSE 8000
CMD ["php", "-S", "0.0.0.0:8000", "-t", "public"]
