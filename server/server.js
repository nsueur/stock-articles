const express = require('express')
const app = express()
const mysql =require('mysql')
const cors = require('cors')

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'mydb',
    port: 3308
});

app.post('/api/create', (req, res) => {
    
    const name = req.body.name
    const category = req.body.category   
    const quantity = req.body.quantity
    const description = req.body.description
    const unit_price = req.body.unit_price

    db.query('INSERT INTO articles (name, category, quantity, unit_price, description) VALUES (?,?,?,?,?)',
     [name, category, quantity, unit_price, description],
     (err, result) => {
         if (err){
             console.log(err)
         }else{
             //res.send("Value Inserted")
         }
        }
     );
});

app.get('/api/all-articles', (req, res) =>{
    db.query("SELECT * FROM articles", (err, result) =>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })
});

app.get('/api/article/:id', (req, res) =>{
    const id = req.params.id
    db.query("SELECT * FROM articles WHERE id = ?", id, (err, result) =>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })
});

app.get('/api/article/:id', (req, res) =>{
    const id = req.params.id
    db.query("SELECT * FROM articles WHERE id = ?", id, (err, result) =>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })
});

app.put('/api/update', (req, res) => {
    const id = req.body.id
    const name = req.body.name
    const category = req.body.category   
    const quantity = req.body.quantity
    const description = req.body.description
    const unit_price = req.body.unit_price
    console.log(req)
    db.query(
        "UPDATE articles SET name = ?, category = ?, quantity = ?, description = ?, unit_price = ? WHERE id = ?",
         [name, category, quantity, description, unit_price, id],
        (err, result) =>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
            }
        }
    );
});

app.delete('/api/delete/:id', (req, res) =>{
    const id = req.params.id
    db.query("DELETE FROM articles WHERE id = ?", id, (err, result) =>{
        if(err){
            console.log(err)
        }else{
            res.send(result);
        }
    })
})

app.listen(3001, () =>{
    console.log("Yey, your server is running on port 3001")
})

