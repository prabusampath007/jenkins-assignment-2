FROM mysql:latest

COPY ./sql/ /app

EXPOSE 3306

CMD [ "mysqld", "--init-file=/app/init.sql" ]