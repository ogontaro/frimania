# Frimania
frimania is cross search in frima site

## Project Repository
frimania has many projects.
client is developed in [frimania-client](https://github.com/ogontaro/frimania-client)  
server is developed in [frimania-server](https://github.com/ogontaro/frimania-server)

```bash
$ git remote add server git@github.com:ogontaro/frimania-server.git
$ git remote add client git@github.com:ogontaro/frimania-client.git
```

## Run Frimania
```bash
$ docker-compose up -d
$ docker-compose exec server bash -c "bundle exec rails db:setup"
```

You should then be able to open [http://localhost:3000](http://localhost:3000) in your browser.
## Test Frimania

```bash
open http://localhost:3000
```
