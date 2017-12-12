const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const solver = require('rubiks-cube-solver');

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// Add headers to enable CORS (cross origin resource sharing)
app.use(function (req, res, next) {
  
      // Website you wish to allow to connect
      // change with your IP address!
      //TODO: change this http://10.251.132.2:8080
      res.setHeader('Access-Control-Allow-Origin', '*');
  
      // Request methods you wish to allow
      res.setHeader('Access-Control-Allow-Methods', 'GET');
  
      // Request headers you wish to allow
      // needs further research
      res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  
      // Set to true if you need the website to include cookies in the requests sent
      // to the API (e.g. in case you use sessions)
      res.setHeader('Access-Control-Allow-Credentials', true);
      // Pass to next layer of middleware
      next();
});

app.set('port', process.env.PORT || 5000);

const server = app.listen(app.get('port'), function () {
  const { port } = server.address();
  console.log(`Listening on port ${port}`);
});

app.use('/api', router);

router.get('/:state', (req, res) => {
  var state = req.params.state;
  console.log(`Request received!`);
  var solveMoves = solver(state);
  res.json(solveMoves);
});