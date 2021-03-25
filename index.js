const express = require('express');

const app = express();

app.get ( '/', (req, res) => {
    res.send ('Yeeeyyy I know how to see node');
})

app.listen ( 2121, ()=> console.log('Listening to port 2121'));