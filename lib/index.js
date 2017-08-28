const { nodeEnv } = require('./util');
console.log(`Running in ${nodeEnv} mode...`);

//read from the command line arguments
const query = process.argv[2];

const ncSchema = require('../schema/index');
const { graphql } = require('graphql');

// execute the query againts the defined server schema
graphql(ncSchema, query).then(result => {
  console.log(result);
});