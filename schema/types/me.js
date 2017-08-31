const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
  GraphQLList
} = require('graphql');

const ContestType = require('./contest');
const pgdb = require('../../database/accessors/pgdb');

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
    email : { type : new GraphQLNonNull(GraphQLString) },
    contests : {
      type : new GraphQLList(ContestType),
      resolve(obj, args, ctx){
        const { pgPool } = ctx;
        return pgdb(pgPool).getContests(obj);
      }
    }
  }
});