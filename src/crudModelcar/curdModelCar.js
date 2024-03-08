const express = require('express');
const db = require('./model');
const dbFunction = db.veiculosDatabase();
const app = express();
app.use(express.json());

app.get('/car', async (req, res) => {
    console.log('GET METHOD');
    res.status(200).send( await dbFunction.list() );
});

app.get('/car/:id', async (req, res) => {
    console.log('GET BY ID METHOD');
    res.status(200).send( await dbFunction.get(req.params.id) );
});

app.post('/car', async (req, res) => {
    console.log('POST METHOD');
    await dbFunction.insert(req.body.veiculo)
    res.status(200).send( await dbFunction.list() );
});

app.put('/car/:id', async (req, res) => {
    console.log('PUT METHOD');
    res.status(200).send( await dbFunction.update( req.body.veiculo, req.params.id) );
});
app.delete('/car/:id', async (req, res) => {
    console.log('PUT DELETE');
    res.status(200).send( await dbFunction.del(  req.params.id ) );
    
});
app.listen(3002, () => {
    console.log('SERVER ON');
})


