const path = require("path");
const { exit } = require("process");

// Proceso cuando se llame a la ruta
exports.getAltaFpalind = (req, res)=>{
    //res.send('<h1>Formulario de consola</h1>')
    res.sendFile(path.join(__dirname,'..','views','tarea2.html'));
}

exports.postAltaFpalind = (req, res)=>{
    console.log(req.body)
    var re = /[\W_]/g;
    var x = 0;
    var str = req.body.nombrePalabra;
    var strF = req.body.fraseF;
    var palabraNormal = str.toLowerCase().replace(re, '');
    var palabraInversa = palabraNormal.split('').reverse().join(''); 
    if (palabraNormal == ""){
        for(var i = 0;i<10;i++){
            strF = strF.replace("fa","")
            strF = strF.replace("fe","")
            strF = strF.replace("fi","")
            strF = strF.replace("fo","")
            strF = strF.replace("fu","")
        }
        res.json({"No se introdujo palabra":strF})
    }
    if (palabraNormal == palabraInversa){
        for(var i = 0;i<10;i++){
            strF = strF.replace("fa","")
            strF = strF.replace("fe","")
            strF = strF.replace("fi","")
            strF = strF.replace("fo","")
            strF = strF.replace("fu","")
        }
        res.json({"La palabra es palíndrome":strF})
    } else{
        for(var i = 0;i<10;i++){
            strF = strF.replace("fa","")
            strF = strF.replace("fe","")
            strF = strF.replace("fi","")
            strF = strF.replace("fo","")
            strF = strF.replace("fu","")
        }
        res.json({"La palabra no es palíndrome":strF})
    }
}

exports.getConsultaFpalind = (req,res)=>{
    res.send('<h1>Datos de las consolas</h1>')
}