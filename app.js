// importo il modulo express
const express = require('express')
// creo una funzione che crea un app express che mi permette di definire rotte
const app = express()
// porta del server
const port = 3000
// importo il router dei posts
const postsRouter = require('./routers/posts');
// importo il middleware delle gestione errori server
const errorsHandler = require('./middlewares/errorsHandler');
// importo il middleware notfound 404
const notFound = require('./middlewares/notFound')

// imgs statiche
app.use(express.static('public'));


// middleware per abilitare il parsing del JSON
app.use(express.json());

// definisco route per la homepage
app.get('/', (req, res) => { // parametri della funzione request(richiesta del client) response(risposta del server invia al client)
    res.send("Server del mio blog");
})

// utilizziamo la rotta dei posts andando a definire la parte iniziale delle rotte
app.use("/posts", postsRouter)

// utilizzo gestione errori server alla fine dopo le route

app.use(errorsHandler);

// utilizzo middleware di gestione not found 404

app.use(notFound);

// avvia il server e lo mette in ascolto sulla porta
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})