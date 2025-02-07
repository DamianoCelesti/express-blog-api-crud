const express = require('express')
const router = express.Router();
// importo l'array
// const posts = require('../data/posts');



// importo le funzioni del controller
const postController = require('../controllers/postController');



// rotte di CRUD di posts
// index
router.get('/', postController.index);
    
    

// show
router.get('/:id', postController.show);

// store
router.post('/', function (req, res) {
    res.send('Creazione nuovo post');
});
// update
router.put('/:id', function (req, res) {
    res.send('Modifica del post numero ' + req.params.id);
});
// modify
router.patch('/:id', function (req, res) {
    res.send('Modifica parziale del post numero ' + req.params.id);
});
// destroy
router.delete('/:id', postController.destroy);

module.exports = router;