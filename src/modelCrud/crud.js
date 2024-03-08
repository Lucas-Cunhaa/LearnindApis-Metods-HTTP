const db = require('./model') 
const express = require('express'); 
const app = express();
const dbFunctions = db.AlunosDatabase();


app.use(express.json());

app.get('/aluno', async (req, res) => {
    console.log('GET METHOD');
    res.status(200).send( await dbFunctions.list() );  
});

app.get('/aluno/:id', async (req, res) => {
    console.log('GET BY ID METHOD');
    const id =  req.params.id
    res.status(200).send( await dbFunctions.get(id) ); 
})


app.post('/aluno', async (req, res) => {
   
    console.log('POST METHOD');
    let aluno = req.body.aluno
    await dbFunctions.insert(aluno)
    res.status(200).send( await dbFunctions.list() );
   
});

app.put('/aluno/:id', async (req, res) => {
    console.log('PUT METHOD');
    const id =  req.params.id
    const aluno = req.body.aluno
    await dbFunctions.update(aluno, id)
    res.status(200).send( await dbFunctions.get(id) )
})

app.delete('/aluno/:id', async (req, res) => {
    console.log('DELETE METHOD');
    const id =  req.params.id
    await dbFunctions.del(id)
    res.status(200).send(await dbFunctions.list())

});
app.listen(3000, () => {
    console.log("Server ON ");
})
