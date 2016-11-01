var express = require('express');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var cors = require('cors');
var compression = require('compression');
var wpconfig = require('./webpack.config');

var routes = require('./routes');
var config = require('./conf');

var app = express();

var compiler = webpack(wpconfig);

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: wpconfig.output.publicPath,
}));

app.use(webpackHotMiddleware(compiler));
app.use(express.static('src')); // to serve static files like images or css from folder "src"
app.use(cors());
app.use(compression());

app.get('/', function(req, res) {
  res.sendFile(`${__dirname}/src/index.html`);
});

routes.bind(app);

var port = process.env.OrwellPort || config.port;

app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info(`Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
  }
});
