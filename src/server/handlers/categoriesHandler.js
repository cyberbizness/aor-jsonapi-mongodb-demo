import config from 'config';

console.log(config.db)


const MongoStore = require('jsonapi-store-mongodb');
module.exports = new MongoStore({
  url: `mongodb://${config.db.host}:${config.db.port}/${config.db.dbName}`,
})
