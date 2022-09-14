//Importar las bibliotecas
const express = require('express');
const path = require('path');
const consolaRoutes = require('./routes/consola')
const fpalindRoutes = require('./routes/fpalind')

const app = express();

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')));
app.use('/consola',consolaRoutes);
app.use('/fpalind',fpalindRoutes);


//Definición de nuestra aplicación
app.get('/bigote',(request,response)=>{
    console.log('Hola mundo');
    response.send('<h1>Hola mundo</h1>');
});

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','index.html'));
})

app.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','pagina1.html'));
})

app.get('/tarea1',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','tarea1.html'));
})


//Prueba query
app.get('/prueba1',(req,res)=>{
    console.log(req.query);
    res.send("Datos enviados por query "+req.query.name);
});

//Prueba params
app.get('/prueba2/:name/:age',(req,res)=>{
    console.log(req.params);
    console.log(req.query);
    res.send("Datos enviados por params "+ req.params.name);
})

app.post('/prueba3',(req,res)=>{
    console.log(req.body);
    res.send("Datos recibidos")
})

//Llanzar la aplicación
app.listen(8080,()=>{
    console.log("Servidor en línea");
}); //Los parámetros son el puerto donde funcionará y el callback