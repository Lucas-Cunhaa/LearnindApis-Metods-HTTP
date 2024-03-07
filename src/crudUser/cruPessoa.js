const express = require('express');
const app = express();
app.use(express.json()); 

app.get('/user',  (req, res) => {
    console.log("API GET")
    res.status(200).send("All users")
});

app.get('/user/:id', (req, res) => {
    console.log("API GET BY ID")
    res.status(200).send(req.params.id)
})

app.post('/user', (req, res) => {
    console.log("API POST USER")
    res.status(200).send(req.body)
});

app.put('/user/:id', (req, res) => {
    console.log("API PUT USER")
    res.status(200).send(req.params.id)
})

app.delete('/user/:id', (req, res) => {
    console.log("API delete USER")
    res.status(200).send(req.params.id)
})

app.listen(3000, () => {
    console.log('Executed on 3000 door')
});