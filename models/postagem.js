const database = require('../config/database');

module.exports.inserir = (dados) => {
  return new Promise((resolve, reject) => {

    database(response => {
      const collection = response.db.collection('postagens');

      collection.insert(dados, (err, records) => {
        if (err) {
          reject();
        } else {
          resolve();
        }
      });

      console.log('Fechando conexão');
      response.client.close();
    });

  });
}