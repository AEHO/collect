""" Defines the structure for the data in the Datastore. """

from google.appengine.ext import ndb
from endpoints_proto_datastore.ndb import EndpointsModel
from endpoints_proto_datastore.ndb import EndpointsAliasProperty

class Entity(EndpointsModel):

    _message_fields_schema = ('id', 'userid', 'postid', 'tags',)

    userid = ndb.StringProperty(indexed=True)
    postid = ndb.StringProperty(indexed=True)
    tags = ndb.StringProperty(repeated=True)


class EntityCollection(EndpointsModel):

    """Container for creating the ProtoRPC messages of Entity."""

    _message_fields_schema = ('id', 'items',)
    items = ndb.LocalStructuredProperty(Entity, repeated=True)


class EntityInfo(EndpointsModel):

    postid = ndb.StringProperty()
    count = ndb.IntegerProperty()


class EntityInfoCollection(EndpointsModel):

    _message_fields_schema = ('id', 'items',)
    items = ndb.LocalStructuredProperty(EntityInfo, repeated=True)
