docker build --no-cache -f SQL\Dockerfile.PostgreSql -t servicedesk/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t servicedesk/app ../..
