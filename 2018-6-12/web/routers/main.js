/**
 * Created by Moudi on 2017/2/23.
 */

let express = require('express');
let router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index');
});
router.get('/login', (req, res, next) => {
    res.render('login');
});
module.exports = router;