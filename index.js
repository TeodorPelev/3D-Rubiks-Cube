const express = require('express');
const path = require('path');
const solver = require('rubiks-cube-solver');

const app = express();

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'js')));
app.use(express.static(path.join(__dirname, 'textures')));

app.set('port', 3000);

const server = app.listen(app.get('port'), function () {
  const { port } = server.address();
  console.log(`Listening on port ${port}`);
});

app.get('/process_get', function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:req.query.first_name,
      last_name:req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
});

app.get('/solution/:state', (req, res) => {
    let state = req.params.state;
    let solveMoves = solver(state);
    res.json(solveMoves);
});