const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull
} = require('graphql');
const MeType = require('./types/me');

//Top level query
const RootQueryType = new GraphQLObjectType({
  name : 'RootQueryType',
  fields : {
    hello : {
      type : GraphQLString,
      description : 'the *mandatory* hello world example',
      resolve : () => {
        return 'world'
      }
    },
    me : {
      type : MeType,
      description : 'The current user identified by an api key',
      args : {
        key : { type : new GraphQLNonNull(GraphQLString) }
      },
      resolve : () => {
        return {
          id : 42,
          email : "fake@example.com"
        };
      }
    }
  }
});

const ncSchema = new GraphQLSchema({
  query : RootQueryType,
  // mutation : ...
});

module.exports = ncSchema;