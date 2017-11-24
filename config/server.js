import express from 'express';
import consign from 'consign';
import bodyParser from 'body-parser';
import expressValidator from 'express-validator';

const app = express();

app.set('view engine', 'pug');
app.set('views', './app/views');

app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(expressValidator());

consign()
  .include('app/routes')
  .then('app/models')
  .then('app/controllers')
  .into(app);

module.exports = app;