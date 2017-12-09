var express = require('express');
var app = express();
const solver = require('rubiks-cube-solver');

app.use(express.static('public'));
app.use("/js", express.static(__dirname + '/js'));
app.use("/textures", express.static(__dirname + '/textures'));

app.get('/Rubiks_Cube.html', function (req, res) {
   res.sendFile( __dirname + "/" + "Rubiks_Cube.html" );
})

app.get('/process_get', function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:req.query.first_name,
      last_name:req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)

})

app.get('/solution/:state', (req, res) => {
    let state = req.params.state;
    let solveMoves = solver(state);
    res.json(solveMoves);
  });