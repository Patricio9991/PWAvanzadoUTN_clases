const express=require("express")

const server=express()

server.use(express.json()) 

server.get('/',(req,res)=>{
    res.send("lalalal")
})

server.get('/about',(req,res)=>{
    res.send("Pagina sobre about")
})

server.post('/registro/:id',(req,res)=>{
   
    res.json({
        username:"Cameron",
        lastname:"Howling"
    })
    console.log(req.body)
    console.log(req.params)
})

server.listen(3000,()=>{console.log("API corriendo en el puerto 3000")})