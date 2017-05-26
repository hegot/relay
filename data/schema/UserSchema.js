import {
    GraphQLObjectType,
    GraphQLInt,
} from 'graphql';

import {
    resolveArrayData,
    getArrayData
} from 'sequelize-relay';

import Db from '../db/db';

import {
    globalIdField,
    connectionFromPromisedArray
} from 'graphql-relay';

var UserSchema = function(nodeInterface, connectionArgs, nodeEntityConnection, termConnection){
    return new GraphQLObjectType({
        name: 'User',
        description: 'A person who uses app',
        fields: () => ({
            id: globalIdField('User'),
            nodes: {
                type: nodeEntityConnection,
                args: {
                    ...connectionArgs,
                    nid: {
                        type: GraphQLInt,
                    },
                },
                resolve: (rootValue, args) => {
                    var query;
                    if(args.nid){
                        query = { where: args.nid };
                    }else{
                        query = {};
                    }
                    console.log(args);
                    return connectionFromPromisedArray(resolveArrayData(Db.models.node.findAll(query)), args);
                }
            },
            terms: {
                type: termConnection,
                args: {
                    ...connectionArgs,
                    vid: {
                        type: GraphQLInt,
                    },
                },
                resolve: (rootValue, args) => {
                    var query;
                    if(args.vid){
                        query = { where: {vid: args.vid} };
                    }else{
                        query = {};
                    }
                    return connectionFromPromisedArray(resolveArrayData(Db.models.term.findAll(query)), args);
                }
            },
        }),
        interfaces: [nodeInterface],
    });
}
module.exports = UserSchema;