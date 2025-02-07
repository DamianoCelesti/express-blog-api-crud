// importo i dati
const posts = require('../data/posts');



function index(req, res) {
    let filteredPost = posts;

    if (req.query.tags) {
        filteredPost = posts.filter(
            post => post.tags.includes(req.query.tags)
        );
    }
    res.json(filteredPost);
}
function show(req, res) {
    // copiamo la logica della show
}
function store(req, res) {
    // copiamo la logica della store
}
function update(req, res) {
    // copiamo la logica dell'update
}
function destroy(req, res) {
    // copiamo la logica della destroy..
}
// esportiamo tutto
module.exports = { index, show, store, update, destroy }