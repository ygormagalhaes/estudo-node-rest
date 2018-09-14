const database = require('../config/database');
const objectID = require('mongodb').ObjectID;

module.exports.inserir = (dados) => {
  return new Promise((resolve, reject) => {

    database(response => {
      const collection = response.db.collection('postagens');

      collection.insert(dados, (err, records) => {
        if (err) {
          reject(err);
        } else {
          resolve(records);
        }
      });

      console.log('Fechando conexão');
      response.client.close();
    });

  });
};

module.exports.listar = () => {
  return new Promise((resolve, reject) => {

    database(response => {
      const collection = response.db.collection('postagens');

      collection.find().toArray((err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });

      console.log('Fechando conexão');
      response.client.close();
    });

  });
};

module.exports.consultarPorId = (id) => {
  return new Promise((resolve, reject) => {

    database(response => {
      const collection = response.db.collection('postagens');

      collection.findOne({_id: objectID(id)}, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });

      console.log('Fechando conexão');
      response.client.close();
    });

  });
};

module.exports.atualizar = (id, dados) => {
  return new Promise((resolve, reject) => {

    database(response => {
      const collection = response.db.collection('postagens');
      
      const params = [];
      params.push({_id: objectID(id)});
      params.push({$set: {usuario: dados.usuario}});
      params.push({});

      collection.update(...params, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });

      console.log('Fechando conexão');
      response.client.close();
    });

  });
};

module.exports.remover = (id) => {
  return new Promise((resolve, reject) => {

    database(response => {
      const collection = response.db.collection('postagens');

      collection.remove({_id: objectID(id)}, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });

      console.log('Fechando conexão');
      response.client.close();
    });

  });
};