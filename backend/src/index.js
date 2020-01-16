const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://rocketCurso:ZJWqI11W74Lrhq2Q@cluster0-g3deh.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
// week10 é o nome da base de dados
app.use(cors());
app.use(express.json()); // com essa linha ele entende requisições no formato JSON
app.use(routes);
//Métoddos HTTP: get (buscar), post(adicionar), put(atualizar), delete(remover)

// Tipos de Parametros:
// Query Params: req.query (Filtros, Ordenação, Paginação)
// Route Params: req.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para a Criação ou alteração de um registro)

app.listen(3333);