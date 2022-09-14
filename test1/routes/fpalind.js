const express = require('express');
const router = express.Router();
const fpalindController= require('../controllers/fpalind')


///Create, Read,Update,Delete (CRUD) Altas Bajas Cambios Consultas

//Servicio para mostrar el formulario
router.get('/altaFpalind',fpalindController.getAltaFpalind);
//Servicio para procesar los datos del formulario
router.post('/altaFpalind',fpalindController.postAltaFpalind)
//Servicio para consultar todos los datos
router.get('/consultaFpalind',fpalindController.getConsultaFpalind);

module.exports = router