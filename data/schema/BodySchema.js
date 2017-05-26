import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLID
} from 'graphql';

const BodySchema  = function(nodeInterface) {
    return new GraphQLObjectType({
        name: 'Body',
        description: 'Body',
        fields () {
            return {
                id: {
                    type: new GraphQLNonNull(GraphQLID),
                    resolve: (body) => {
                        return body.entity_id;
                    }
                },
                entity_type: {
                    type: GraphQLString,
                    resolve (body) {
                        return body.entity_type;
                    }
                },
                bundle: {
                    type: GraphQLString,
                    resolve (body) {
                        return body.bundle;
                    }
                },
                deleted: {
                    type: GraphQLInt,
                    resolve (body) {
                        return body.deleted;
                    }
                },
                entity_id: {
                    type: GraphQLInt,
                    resolve (body) {
                        return body.entity_id;
                    }
                },
                revision_id: {
                    type: GraphQLInt,
                    resolve (body) {
                        return body.revision_id;
                    }
                },
                language: {
                    type: GraphQLString,
                    resolve (body) {
                        return body.language;
                    }
                },
                delta: {
                    type: GraphQLInt,
                    resolve (body) {
                        return body.delta;
                    }
                },
                body_value: {
                    type: GraphQLString,
                    resolve (body) {
                        return body.body_value;
                    }
                },
                body_summary: {
                    type: GraphQLString,
                    resolve (body) {
                        return body.body_summary;
                    }
                },
                body_format: {
                    type: GraphQLString,
                    resolve (body) {
                        return body.body_format;
                    }
                }
            };
        },
        interfaces: [nodeInterface],
    });
}
module.exports = BodySchema;