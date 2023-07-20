const { Router } = require('express');                 //funcion router que esta dentro de express
const { usersGet, usersPost, usersDelete, usersPatch, usersPut } = require('../controllers/users');

const router = Router();

router.get('/', usersGet);

router.post('/', usersPost);

router.put('/:id', usersPut);

router.delete('/', usersDelete);

router.patch('/', usersPatch);
module.exports = router;