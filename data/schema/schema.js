import {
  GraphQLObjectType,
  GraphQLSchema,
} from 'graphql';

import {
    connectionArgs,
    connectionDefinitions,
    fromGlobalId,
    nodeDefinitions,
} from 'graphql-relay';
import {
    User,
    getUser,
    getViewer
} from '../db/User';

import NodeSchema from './NodeSchema';
import UserSchema from './UserSchema';
import BodySchema from './BodySchema';
import TermSchema from './TermSchema';
/**
 * We get the node interface and field from the Relay library.
 *
 * The first method defines the way we resolve an ID to its object.
 * The second defines the way we resolve an object to its GraphQL type.
 */
var {nodeInterface, nodeField} = nodeDefinitions(
  (globalId) => {
    var {type, id} = fromGlobalId(globalId);
    if (type === 'User') {
      return getUser(id);
    } else if (type === 'NodeEntity') {
        return null;
    }else if (type === 'Body') {
        return null;
    }else if (type === 'Term') {
        return null;
    } else {
      return null;
    }
  },
  (obj) => {
    if (obj instanceof User) {
      return userType;
    } else if (obj instanceof NodeEntity)  {
      return nodeEntityType;
    }else if (obj instanceof Body)  {
        return bodyType;
    }else if (obj instanceof Term)  {
        return termType;
    }else {
      return null;
    }
  }
);

const bodyType = BodySchema(nodeInterface);
var {connectionType: bodyConnection} =
    connectionDefinitions({name: 'Body', nodeType: bodyType});
const nodeEntityType = NodeSchema(nodeInterface, connectionArgs, bodyConnection);
var {connectionType: nodeEntityConnection} =
    connectionDefinitions({name: 'NodeEntity', nodeType: nodeEntityType});
const termType = TermSchema(nodeInterface, connectionArgs);
var {connectionType: termConnection} =
    connectionDefinitions({name: 'Term', nodeType: termType});

const userType = UserSchema(nodeInterface, connectionArgs, nodeEntityConnection, termConnection);

var queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    node: nodeField,
    viewer: {
      type: userType,
      resolve: () => getViewer(),
    },
  }),
});


export var Schema = new GraphQLSchema({
  query: queryType,
});
