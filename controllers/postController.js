// importo i dati
const posts = require('../data/posts');


//index
function index(req, res) {

    // l array filtrato corrisponde a quello originale
    let filteredPost = posts;
    // controllo se tags è presente e non è vuoto
    if (req.query.tags) {
        // filtro
        filteredPost = posts.filter(
            post => post.tags.includes(req.query.tags)
        );
    }
    // mi restituisce un json
    res.json(filteredPost);
}

//show
function show(req, res) {
    const id = parseInt(req.params.id);

    // cerco il post tramite l id
    const post = posts.find(post => post.id === id);

    // faccio il controllo
    if (!post) {
        res.status(404);

        // mi restituisce un json
        return res.json({
            error: "Not Found",
            message: "Post non trovato"
        });
    }

    // mi restituisce il post sotto forma di json
    res.json(post);
}

function store(req, res) {
    // copiamo la logica della store
}
function update(req, res) {
    // copiamo la logica dell'update
}

// delete
function destroy(req, res) {
    // trasformo l id in numero
    const id = parseInt(req.params.id);

    // cerco il post tramite l id
    const post = posts.find(post => post.id === id);

    // controllo se il post esiste
    if (!post) {
        // se il post non esiste ritorno questo stato
        res.status(404);

        return res.json({
            status: 404,
            error: "Not Found",
            message: "Post non trovato"
        });
    }

    // rimuovo il post dal array
    posts.splice(posts.indexOf(post), 1);

    // restituisce lo status corretto
    res.sendStatus(204);
}
// esportiamo tutto
module.exports = { index, show, store, update, destroy }