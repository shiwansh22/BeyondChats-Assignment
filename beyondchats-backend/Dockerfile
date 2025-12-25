FROM php:8.2-cli

# Install system dependencies
RUN apt-get update && apt-get install -y \
    unzip \
    git \
    libzip-dev \
    && docker-php-ext-install zip pdo pdo_sqlite

# Install Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /app

COPY . .

RUN touch database/database.sqlite \
    && composer install --no-dev --optimize-autoloader \
    && php artisan key:generate \
    && php artisan migrate --force

EXPOSE 8000

CMD php artisan serve --host=0.0.0.0 --port=$PORT
