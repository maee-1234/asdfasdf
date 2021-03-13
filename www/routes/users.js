var express = require('express');
var router = express.Router();

let users = [
  {
    id: 1,
    name: 'alice'
  },
  {
    id: 2,
    name: 'bek'
  },
  {
    id: 3,
    name: 'chris'
  }
]
/* GET users listing. */
router.get('/users', function(req, res, next) {
  console.log('who get in here/users');
  res.json(users)
});

module.exports = router;
