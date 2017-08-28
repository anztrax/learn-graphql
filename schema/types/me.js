const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLNonNull,
  GraphQLString
} = require('graphql');

module.exports = new GraphQLObjectType({
  name : "MeType",
  fields : {
    id : { type : GraphQLID },
    firstName : { type : GraphQLString },
    lastName : { type : GraphQLString },
    fullName : {
      type : GraphQLString,
      resolve : obj => `${obj.firstName} ${obj.lastName}`
    },
    createdAt : { type : GraphQLString },
    email : { type : new GraphQLNonNull(GraphQLString) }
  }
});