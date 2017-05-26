import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLID,
    GraphQLList,
} from 'graphql';

var TermSchema = function(nodeInterface, connectionArgs){
    return new GraphQLObjectType({
        name: 'Term',
        description: 'This represents a Office',
        fields: () => ({
            id: {
                type: new GraphQLNonNull(GraphQLID),
                resolve: (term) => {
                    return term.tid;
                }
            },
            tid: {
                type: new GraphQLNonNull(GraphQLID),
                resolve: (term) => {
                    return term.tid;
                }
            },
            vid: {
                type: GraphQLInt,
                resolve (term) {
                    return term.vid;
                }
            },
            name:{
                type: GraphQLString,
                resolve (term) {
                    return term.name
                }
            },
            description: {
                type: GraphQLString,
                resolve (term) {
                    return term.description;
                }
            },
            format: {
                type: GraphQLString,
                resolve (term) {
                    return term.format;
                }
            },
            weight: {
                type: GraphQLInt,
                resolve (term) {
                    return term.weight;
                }
            },
            uuid: {
                type: GraphQLString,
                resolve (term) {
                    return term.uuid;
                }
            },
            language: {
                type: GraphQLString,
                resolve (term) {
                    return term.language;
                }
            },
            i18n_tsid: {
                type: GraphQLInt,
                resolve (term) {
                    return term.i18n_tsid;
                }
            },
            rh_action: {
                type: GraphQLInt,
                resolve (term) {
                    return term.rh_action;
                }
            },
            rh_redirect: {
                type: GraphQLString,
                resolve (term) {
                    return term.rh_redirect;
                }
            },
            rh_redirect_response: {
                type: GraphQLInt,
                resolve (term) {
                    return term.rh_redirect_response;
                }
            },
        }),

        interfaces: [nodeInterface],
    });
}
module.exports = TermSchema;