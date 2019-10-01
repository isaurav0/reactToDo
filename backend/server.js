const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Todo = require('./models/todo');

//init app 
const app = express();

//setup mongoose
mongoose.connect('mongodb://localhost/todo', { useNewUrlParser: true, useUnifiedTopology: true });

//enable cors browser
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//setup body-parser
app.use(
    bodyParser.urlencoded({
      extended: true
    })
);
  
app.use(bodyParser.json());

app.get('/', (req, res)=>{
    Todo.find()
        .then(todos => 
        res.json(todos)    
        )
})

app.post('/', (req, res)=>{
    title = req.body.title;
    // res.send(title)
    console.log(title)
    if(title.length!==0){
        var todo = new Todo({title: title});
        todo.save()
            .then(()=>{
                console.log(title, ' saved');
                res.redirect('/');
        })
            .catch(err=>console.log(err))
    }
    else
        res.redirect('/');
})

app.listen(4000, () => console.log('server started on port 4000'));
