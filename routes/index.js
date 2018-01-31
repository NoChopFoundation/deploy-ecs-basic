var express = require('express');
var router = express.Router();

/* GET home page. */
router.get(
  '/',
  function (req, res, next) {
    res.render('index', {
        title: 'Express',
        environment: process.env.ENVIRONMENT
      }
    );
  }
);
router.get('/dapp', function (req, res, next) {
	res.render('dapp/index', {
		title: 'Express',
		environment: process.env.ENVIRONMENT
	});
});
		

module.exports = router;
