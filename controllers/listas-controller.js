//const bd = require('../database')

const listaController = {

    Home: (req, res, next) => {
        res.status(200).render('home.html')
    },

    QuemSomos: (req, res, next) => {
        res.status(200).render('quem-somos.html')
    },

    Serviços: (req, res, next) => {
        res.status(200).render('servicos.html')
    },

    Blog: (req, res, next) => {
        res.status(200).render('blog.html')
    },

    BlogDetalhes: (req, res, next) => {
        res.status(200).render('blog-detalhes.html')
    },

    getContato: (req, res, next) => {
        res.status(200).render('contato.html')
    },

    postContato:  (req,res,next) => {
        let nome = req.body.name
        console.log(req.body)
        console.log(nome)
        console.log(req.body.email)
        console.log(req.body.subject)
        console.log(req.body.message)
    },


}



module.exports = listaController