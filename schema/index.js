const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} = require('graphql');

//Top level query
const RootQueryType = new GraphQLObjectType({
  name : 'RootQueryType',
  fields : {
    hello : {
      type : GraphQLString,
      resolve : () => {
        return 'world'
      }
    }
  }
});

const ncSchema = new GraphQLSchema({
  query : RootQueryType,
  // mutation : ...
});

module.exports = ncSchema;