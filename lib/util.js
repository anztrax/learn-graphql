const humps = require('humps');

module.exports = {
  nodeEnv: process.env.NODE_ENV || 'development',

  fromSnakeCase(GraphQLType){
    return {
      type : GraphQLType,
      //the 4th arguments hold the information of execution state
      resolve : (obj, args, ctx, { fieldName }) => {
        return obj[humps.decamelize(fieldName)];
      }
    }
  }
};
