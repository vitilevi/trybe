const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

const mongoConnection = require('../../models/connection');
const MoviesModel = require('../../models/movieModel');

describe('Busca um filme no BD', () => {
  const DBServer = new MongoMemoryServer();
  let connectionMock;
  
  const payloadMovie = {
    _id: 1,
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  };
  
  before(async () => {
    
    const URLMock = await DBServer.getUri();
    
    connectionMock = await MongoClient
    .connect(URLMock, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then((conn) => conn.db('model_example'));
    
    sinon.stub(mongoConnection, 'getConnection').resolves(connectionMock);
  });
  
  after(() => {
    mongoConnection.getConnection.restore();
  });
  
  describe('quando é inserido com sucesso', () => {
    
    it('retorna um objeto', async () => {
      const actual = MoviesModel.getById(1);
      expect(actual).to.be.an('object');
    });

    
  });
});