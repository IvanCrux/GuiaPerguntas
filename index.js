const express = require("express")
const app = express()


app.set('view engine','ejs')

app.get('/',(req,res)=>{7
    res.render("index")
})

app.listen(3000,()=>{
    console.log(" app rodando!");
})

// Adicionado no git