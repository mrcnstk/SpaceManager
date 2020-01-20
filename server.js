const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

//add the router
app.use('/', router);
app.use(express.static(__dirname));
app.listen(3000);

console.log('Running at Port 3000');