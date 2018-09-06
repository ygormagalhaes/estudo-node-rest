const mongodb = require('mongodb');
const url = "mongodb://localhost:27017";
const dbName = "instagram";

var connMongoDB = callback => {

  mongodb.connect(url, (err, client) => {

    console.log("Conectado ao servidor mongo.");
    const db = client.db(dbName);
    callback({db, client});

  });

};

module.exports = connMongoDB;