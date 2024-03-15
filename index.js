const express=require('express')
const PORT=5617
app=express()
function handleFirstRequestion(req,res){
    res.send('Hello world! This is my First website')
}

app.get('/',handleFirstRequestion)
app.listen(PORT,()=>console.log("Listening to port",{PORT}))