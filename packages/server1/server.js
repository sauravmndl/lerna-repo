const express = require('express');
const app = express();

app.get('/server1',(req, res)=>{
    console.log('From server1');
    res.status(200).send('From server1');
});

app.listen(9595);
console.log('server1 listening on 9595');