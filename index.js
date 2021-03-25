const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
// ------------- get --------------
app.get ( '/', (req, res) => {
    res.send ('Yeeeyyy I know node a bit');
})

app.get('/users/:id', (req, res) => {
    const users = ['Aisha','Rishab','Sahil','Kanishk','Koustob'];
    const id = req.params.id;
    const name = users[id];
    res.send({id , name});
})

// ------------ post --------------
app.post('/addUser', (req, res) => {
    const user = req.body;
    user.id = 15;
    res.send(user);
})

app.listen ( 2121, ()=> console.log('Listening to port 2121'));