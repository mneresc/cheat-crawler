const tr = require('tor-request');

tr.request('https://pt.wikipedia.org/wiki/Lista_de_epis%C3%B3dios_de_Naruto_Shippuden', function (err, res, body) {
  if (!err && res.statusCode == 200) {
    console.log(body);
  }else{
    console.log(err);
  }
});
//const browser = await puppeteer.launch({headless: false,args:['--proxy-server="socks5://127.0.0.1:9050"']});
