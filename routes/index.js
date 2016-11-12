var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Anu Shrestha' });
});

router.get('/insult', function(req, res, next) {
  res.render('insult', {title: 'Anu Shrestha',
                        heading: 'NFL Insult Generator'});
});

module.exports = router;
