from mongoengine import connect
from mongoengine import Document
from mongoengine import StringField

host = "mongodb://127.0.0.1:27017"
db_name = "zigdb"
user_name = "admin"
password = "password"
connect(db_name,host=host,username=user_name,password=password)

class Chain(Document):
    name = StringField()
    type = StringField()
    meta = {'collection': 'chains'}
    
'''
chain = Chain(name="eos",type="public")
chain.save()
'''

for chain_object in Chain.objects:
    print(chain_object.name)