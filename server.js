import * as express from 'express';

const path = require('path');

const port = process.env.PORT || 8080;

const app = express();


app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.send(path.resolve(__dirname, 'index.html'));
});

app.listen(port);
console.log('Server started');
