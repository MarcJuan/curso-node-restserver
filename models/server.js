//CLASE PARA EL SERVIDOR
const express = require('express');                         //express
const cors = require('cors');
require('dotenv').config();                                 //dotenv

class Server {
    constructor () {
        this.app = express();                               //creando express como propiedad de servidor        
        this.PORT = process.env.PORT;                       //puerto
        this.userRoute = '/api/users'

        //middlewares
        this.middlewares(); 

        //rutas de la api
        this.routes();                                      //llamando a las rutas
    }

    middlewares() {
        //CORS
        this.app.use(cors());
        
        this.app.use(express.json());

        this.app.use(express.static('public'));             //mostrando contenido estatico con express static   
    }

    routes() {                                                                  //dentro del metodo routes se crearan las rutas de la api
        this.app.use(this.userRoute, require('../routes/user'))                 //middleware con una ruta especifica -> cuando pase una solicitud por la ruta x (primer parametro - path de la ruta) entonces hace esto
    }

    listen() {                                              //metodo que retorna un servidor http mediante .listen()
        this.app.listen(this.PORT, () => {
            console.log('App runing on port 8080');
        })
    }
}

module.exports = Server;