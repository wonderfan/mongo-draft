from mongoengine import Document
from mongoengine import StringField
from mongoengine import ReferenceField

class Request(Document):
    uuid = StringField(primary_key=True)
    user_id = ReferenceField(User)


class RequestAction(Document):
    pass

class Task(Document):
    pass
    
class Message(Document):
    pass

class Template(Document):
    pass
    
class Chain(Document):
    pass
    
class ChainInstance(Document):
    pass
    
class Cloud(Document):
    pass

class Node(Document):
    pass
    
    