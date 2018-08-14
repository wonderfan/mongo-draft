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

### collection administration

```bash
use test;
db.createCollection(collectionName);
show collections;
db.collectionName.drop();
```

### create user

```bash
use test
db.createUser(
   {
     user: "admin",
     pwd: "password",
     roles:
       [
         { role: "readWrite", db: "test" },
         "dbAdmin"
       ]
   }
)
```