const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull
} = require('graphql');
const MeType = require('./types/me');
const pgdb = require('../database/accessors/pgdb');

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
      resolve : (obj, args, ctx) => {
        //arguments from the query fields
        const { key } = args;
        const { pgPool } = ctx;
        return pgdb(pgPool).getUser(key);
      }
    }
  }
});

const ncSchema = new GraphQLSchema({
  query : RootQueryType,
  // mutation : ...
});

module.exports = ncSchema;