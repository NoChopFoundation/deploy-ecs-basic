var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/',
  function (req, res, next) {
	var Personal = require('web3-eth-personal');

	// "Personal.providers.givenProvider" will be set if in an Ethereum supported browser.
	var personal = new Personal(Personal.givenProvider || 'ws://some.local-or-remote.node:8546');
	console.log(personal);
    res.send('respond with a resource');
  }
);

module.exports = router;
