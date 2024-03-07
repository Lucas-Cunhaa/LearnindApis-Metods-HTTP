const express = require('express')
const Car = require('./Car')
const app = express()
app.use(express.json())


let car = new Car('Volkswagem', 'gol', 1)
let cars = [car]


app.get('/car', (req, res) => {
    res.status(200).send(cars)
})

app.get('/car/:id', (req, res) => {
    const myId = parseInt(req.params.id); 
    const car = cars.find(x => x.Id === myId);
    if (!car) {
        return res.status(404).send("Carro não encontrado");
    }
    res.status(200).send(car);
})

app.post('/car', (req, res) => {
    let car = new Car(req.body.Brand,req.body.Model,req.body.Id)
    cars.push(car)
    res.status(200).send(cars)
})



app.put('/car/:id', (req, res) => {

    myId = req.params["id"];
    let carId = cars.find(x => x.Id === myId)
    let index = cars.indexOf(carId)
    cars[index] = req.body
    res.status(200).send(cars[index])
})
app.delete('/car/:id', (req, res) => {
    
        console.log('DELETE METHOD');
        myId = parseInt(req.params["id"]);
        let carIndex = cars.findIndex(x => x.Id === myId);
       if(carIndex === -1 ){
        return res.status(400).send('error')
        }
        cars.splice(carIndex, 1) ;
        res.status(200).send(cars);
      
     });
app.listen(3002, () => {
    console.log('SERVER ON')
})


