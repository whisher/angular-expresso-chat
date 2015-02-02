'use strict';

module.exports = {
  db: 'mongodb://' + (process.env.DB_PORT_27017_TCP_ADDR || 'localhost') + '/angular-expresso-chat-test',
  http: {
    port: 3001
  },
  app: {
    name: 'Angular Express - Mean stack'
  }
};
