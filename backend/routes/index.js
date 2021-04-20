var express = require('express');
var router = express.Router();
const fs = require('fs');
let data=JSON.parse(fs.readFileSync('test.json'));
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/checkSubDomain',(req,res)=>{
    let subDomainName=req.query.subDomainName;
    console.log(data['subDomain'])
    console.log(subDomainName);
      res.json({
        success:true,
        verifySubdomain:data.subDomain.includes(subDomainName)
      })
    
})

module.exports = router;
