const express = require('express');
const app = express();

app.get('/server2',(req, res)=>{
    console.log('From server2');
    res.status(200).send('From server2');
});

app.listen(9596);
console.log('server2 listening on 9596');