const tr = require('tor-request');

tr.request('https://pt.wikipedia.org/wiki/Lista_de_epis%C3%B3dios_de_Naruto_Shippuden', function (err, res, body) {
  if (!err && res.statusCode == 200) {
    console.log(body);
  }else{
    console.log(err);
  }
});