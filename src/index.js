const express = require('express');
const app = express();
app.use(express.json());

const data = [];

app.get('/alunos', (req, res) => {
    console.log(req.query)
    console.log('Went on Students');
    res.status(200).send('deu certo');
});

app.listen(3002, () => {
    console.log('Server Initialized');
});
