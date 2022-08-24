FROM mysql:latest

COPY ./ /app

EXPOSE 3306

CMD [ "mysqld", "--init-file=/app/init.sql" ]