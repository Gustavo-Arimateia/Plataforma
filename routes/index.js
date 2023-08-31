const express = require('express')
const listaController = require('../controllers/listas-controller')

const router = express.Router()

router.get('/', listaController.Home)
router.get('/quem-somos', listaController.QuemSomos)
router.get('/servicos', listaController.Serviços)
router.get('/blog', listaController.Blog)
router.get('/blog-detalhes', listaController.BlogDetalhes)
router.get('/contato', listaController.getContato)
router.post('/contato', listaController.postContato)


module.exports = router
