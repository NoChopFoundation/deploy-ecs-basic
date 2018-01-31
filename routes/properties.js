var express = require('express');
var router = express.Router();
var ip = require('ip');
var fs = require('fs');

var properties = {};
properties.hostAddress = ip.address();
properties.hostDatetime = new Date();


brand = JSON.parse(fs.readFileSync('brand.json'));

router.get('/',
	function (req, res, next) {
		res.send(properties);
	}
);
router.get('/brand',
		function (req, res, next) {
			res.send(brand);
		}
	);

router.post('/', 
  function (req, res, next) {
    var key = req.body.key;
    var value = req.body.value;

    if (key && value) {
      properties[key] = value;
    }

    res.send('ok');
  }
);

module.exports = router;
