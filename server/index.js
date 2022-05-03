const jsonServer = require('json-server');
const index = jsonServer.create();
const PORT = 3000;
const api = require('./api');

const middlewares = jsonServer.defaults()

index.use(middlewares);
index.use(jsonServer.bodyParser);
index.use('/api', api);
index.listen(PORT, () => {
  console.log(`JSON Server is listening on port: ${PORT}`)
})
