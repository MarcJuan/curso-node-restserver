//En este archivo se crean funciones y se exportan
const {response} = require('express');                         //Se importa la peticion y respuesta ya que no estan aqui.

const usersGet = (req, res = response) => {

    const {nombre = "No name", apellido, page = 1, limit = 10} = req.query;             //valores por defecto en caso de que no
    
    res.json({
        msg: 'GET API  - CONTROLLER',
        nombre,
        apellido,
        page,
        limit
    })
};

const usersPost = (req, res = response) => {
    const { nombre } =  req.body;

    res.json({
        msg: 'POST API - CONTROLLER',
        nombre
    })
};

const usersPut = (req, res = response) => {

    const { id } = req.params
    
    res.json({
        msg: 'PUT API - CONTROLLER',
        id
    })
};

const usersDelete = (req, res = response) => {
    res.json({
        msg: 'DELETE API - CONTROLLER'
    })
};

const usersPatch = (req, res = response) => {
    res.json({
        msg: 'PATCH API - CONTROLLER'
    })
};

module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersDelete,
    usersPatch
}