var riso = require('../../')

var app = riso()

app.get('/hello', function (req, res){
  console.log(req.path);
  res.send('hello');
});

app.get('/api/hello', function (req, res){
  console.log(req.path);
  res.send('api');
});

app.listen(3333);
console.log('Listening on port 3333');
