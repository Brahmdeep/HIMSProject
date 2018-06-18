const express=require('express');
const app=express();
const path=require('path');

const routes=require('./app/routes')

app.use(express.static(path.join(__dirname,'dist/routing-demo')));
app.use('/routes',routes);

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'/dist/routing-demo/index.html'));
})


const port =process.env.PORT||4600;
app.listen(port,(req,res)=>{
    console.log("Running at port 4600");
})