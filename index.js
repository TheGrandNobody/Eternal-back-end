const express = require('express');
const handleError = require('./middlewares/errorhandling');
const mongooseConnectionHandler = require('./lib/mongooseConnectionHandler');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = parseInt(process.env.PORT, 10) || 3001;
const routes = require('./routes/index');

const server = express();
server.use(cors());
server.use(bodyParser.json());
server.use('/api', routes);
server.use(handleError);

// mongooseConnectionHandler
//   .connect('mongodb+srv://tamjeed:Macbookpro1@cluster0.f92lg.mongodb.net/eternal?retryWrites=true&w=majority', {
//     useNewUrlParser: true,
//   })
//   .catch((err) => console.log(err));

mongooseConnectionHandler
  .connect('mongodb://localhost:27017/eteranl', {
    useNewUrlParser: true,
  })
  .catch((err) => console.log(err));

//localhost:27017

mongodb: server.listen(port, (err) => {
  if (err) throw err;
  console.log(`> Ready on http://localhost:${port}`);
});
