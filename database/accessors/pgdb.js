module.exports = pgPool => {
  return {
    getUser(apiKey){
      const numberAPIKey = parseInt(apiKey);
      return pgPool.query(`
        select * from users
        where api_key = $1
      `, [numberAPIKey]).then(res => {
        console.log('res : ',res.rows);
        return res.rows[0];
      });
    }
  }
};