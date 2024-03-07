const express = require('express'); 
const app = express();
app.use(express.json());

let users = []

app.get('/user', (req, res) => {
    console.log('GET METHOD');
    res.status(200).send({"users" : users});
});

app.post('/user', (req, res) => {
    console.log('POST METHOD');
    const user =  req.body;
    users.push(user);
    res.status(200).send({"users" : user})
    
});

app.put('/user/:id', (req, res) => {
    console.log('PUT METHOD');
    myId = req.params["id"]
    
    users.forEach((user) => {
        console.log(user)
        if(user.id == myId)
         {
           user.nome = req.body.nome 
           user.id = req.body.id
         } 
    })
    res.status(200).send(users)
    
})

app.delete('/user/:id',  (req, res) => {
    console.log('DELETE METHOD');
    myId = req.params["id"];
    let userId = users.find(x => x.id === myId);
    let index = users.indexOf(userId);
    users.splice(index, 1) ;
    res.status(200).send(users);
 })


app.listen(3000, () => {
    console.log("Server ON ")
})