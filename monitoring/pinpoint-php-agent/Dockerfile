FROM php:7.4-fpm

RUN cd /tmp && curl -sS http://getcomposer.org/installer | php && mv composer.phar /usr/local/bin/composer

RUN apt-get update \
    && apt-get install -y sudo git zip unzip libzip-dev

RUN docker-php-ext-install bcmath zip

RUN useradd -rm -d /home/vagrant -s /bin/bash -G sudo -G www-data -u 1000 vagrant \
    && echo "vagrant ALL=(ALL) NOPASSWD: ALL" > /etc/sudoers.d/vagrant

ENV HOME /home/vagrant

USER vagrant

WORKDIR /vagrant
