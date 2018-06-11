/**
 * Created by Moudi on 2017/2/23.
 */
let express = require('express');
let router = express.Router();

router.get('/aaaaa', (req, res, next) => {
    res.render('index');
});
module.exports = router;