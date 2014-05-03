# -*- coding: utf-8 -*-
"""Methods ran by the API."""

import endpoints

from google.appengine.ext import ndb
from protorpc import messages
from protorpc import message_types
from protorpc import remote
from api.models import Entity, EntityCollection, EntityInfo, EntityInfoCollection

@endpoints.api(name="collectapi", version="v1", description="Collect Facebook API",
               allowed_client_ids=[endpoints.API_EXPLORER_CLIENT_ID],
               audiences=[endpoints.API_EXPLORER_CLIENT_ID])
class CollectApi(remote.Service):

    """FbCollect Open API v1."""

    @Entity.query_method(query_fields=('limit', 'pageToken', 'order',
                                       'userid', 'postid', 'tags',),
                         path="entities",
                         limit_default=1000,
                         limit_max=2000,
                         http_method="GET",
                         name="entities.list")
    def EntityList(self, query):
        return query

    @Entity.method(path='entity',
                   http_method='POST',
                   name='entity.post')
    def EntityPost(self, entity):
        if entity.userid:
            entity.put()

        return entity

    @EntityCollection.method(path='entities',
                             http_method='POST',
                             name='entities.listpost')
    def EntitiesListPost(self, entities_collection):
        ndb.put_multi(entities_collection.items)
        return entities_collection

    @Entity.method(request_fields=('id',),
                   path="entity",
                   http_method="GET",
                   name="entity.get")
    def EntityGet(self, entity):
        """Queries the DB for an Entity with the given ID."""
        if not entity.from_datastore:
            raise endpoints.NotFoundException('entity not found')
        return entity

    @Entity.method(request_fields=('id',),
                   path="entity",
                   http_method="DELETE",
                   name="entity.delete")
    def EntityDelete(self, entity):
        """Queries the DB for an Entity with the given ID."""
        if not entity.from_datastore:
            raise endpoints.NotFoundException('entity not found')
        return message_types.VoidMessage()

    @EntityInfo.method(request_fields=('postid',),
                       path="entity/info/{postid}",
                       http_method="GET",
                       name="entity.info.get")
    def EntityInfoGet(self, entity):

        iterator = Entity.query(Entity.postid == entity.postid).iter()
        count = 0
        while iterator.has_next():
            count += 1
            iterator.next()

        entity.count = count

        return entity

    @EntityInfoCollection.method(path="entity/info",
                       http_method="GET",
                       name="entity.info.list")
    def EntityInfoList(self, entity_info_collection):
        print entity_info_collection.items

        return entity_info_collection
