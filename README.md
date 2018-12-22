# Frimania
frimania is cross search in frima site
client is developed in [frimania-client](https://github.com/ogontaro/frimania-client)  
server is developed in [frimania-server](https://github.com/ogontaro/frimania-server)

## Setup
./setup.sh

## init App
```
docker-compose run rails bash -c "bundle exec rails db:create db:migrate db:seed"
```

## Run App
```
docker-compose up -d
```
