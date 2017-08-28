const { nodeEnv } = require('./util');
console.log(`Running in ${nodeEnv} mode...`);

const pg = require('pg');
const pgConfig = require('../config/pg')[nodeEnv];
const pgPool = new pg.Pool(pgConfig);


const app = require('express')();

const ncSchema = require('../schema/index');
const graphqlHTTP = require('express-graphql');

app.use('/graphql',  graphqlHTTP({
  schema : ncSchema,
  graphiql : true,
  context : {
    pgPool
  }
}));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});