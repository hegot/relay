import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLID,
    GraphQLList,
} from 'graphql';
import {
    connectionFromPromisedArray
} from 'graphql-relay';
import {
    resolveArrayData,
    getArrayData
} from 'sequelize-relay';

import Db from '../db/db';

var NodeSchema = function(nodeInterface, connectionArgs, bodyConnection){
    return new GraphQLObjectType({
        name: 'NodeEntity',
        description: 'This represents a Office',
        fields: () => ({
            id: {
                type: new GraphQLNonNull(GraphQLID),
                resolve: (node) => {
                    return node.nid;
                }
            },
            nid: {
                type: GraphQLInt,
                resolve (node) {
                    return node.nid;
                }
            },
            vid: {
                type: GraphQLInt,
                resolve (node) {
                    return node.vid;
                }
            },
            type:{
                type: GraphQLString,
                resolve (node) {
                    return node.type;
                }
            },
            language: {
                type: GraphQLString,
                resolve (node) {
                    return node.language;
                }
            },
            title: {
                type: GraphQLString,
                resolve (node) {
                    return node.title;
                }
            },
            uid: {
                type: GraphQLInt,
                resolve (node) {
                    return node.uid;
                }
            },
            status: {
                type: GraphQLInt,
                resolve (node) {
                    return node.status;
                }
            },
            created: {
                type: GraphQLInt,
                resolve (node) {
                    return node.created;
                }
            },
            changed: {
                type: GraphQLInt,
                resolve (node) {
                    return node.changed;
                }
            },
            comment: {
                type: GraphQLInt,
                resolve (node) {
                    return node.comment;
                }
            },
            promote: {
                type: GraphQLInt,
                resolve (node) {
                    return node.promote;
                }
            },
            sticky: {
                type: GraphQLInt,
                resolve (node) {
                    return node.sticky;
                }
            },
            tnid: {
                type: GraphQLInt,
                resolve (node) {
                    return node.tnid;
                }
            },
            translate: {
                type: GraphQLInt,
                resolve (node) {
                    return node.translate;
                }
            },
            uuid: {
                type: GraphQLString,
                resolve (node) {
                    return node.uuid;
                }
            },
            body: {
                type: bodyConnection,
                args: connectionArgs,
                resolve: (node, args) =>{
                    return connectionFromPromisedArray(resolveArrayData(Db.models.body.findAll({where:{entity_id: node.nid}})), args);
                }

            },
        }),

        interfaces: [nodeInterface],
    });
}
module.exports = NodeSchema;