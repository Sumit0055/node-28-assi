//........................................mvc models.....................
//........................................ejs:-enbedded java script engine..................................
//........................................monhogoose................................................
//........................................express................................................
//........................................server side rendrinig....................
//........................................render.....................918743095627
const express = require('express');
const path=require('path');
const student = require('./routes/student')
const app=express();
const connection =require('./connection') //..................step first coneecton is a create
connection();
app.use(student)
app.set('view engine', 'ejs');
app.set('views',path.resolve('./views'));

app.listen(3000,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("server is running on 3000");
    }
})


//..........first name ...........last name........counrty code.........mobile no.......email..........password.........comfirm pasword.....
//