# mongo-draft

## mongo manual

### start the mongodb

```bash
mongod --bind_ip=$IP --nojournal
```
### create database

```bash
use test;
db.collection.insert()
```
### drop database

```bash
use test;
db;
db.dropDatabase();
```
