const express = require('express');
const app = express();
const path = require("path");
require("dotenv").config();
const port = process.env.PORT || 332;

const musicas = [
    {
        id: 1,
        nome: "We cry together",
        autor: "Kendrick Lamar",
        album: "Mr. Morales and The Big Steppers",
        genero: "Rap",
        capa: "/img/Mrmorale.png"
    },
    {
        id: 2,
        nome: "Johnny P's Caddy",
        autor: "Benny The Butcher, J Cole",
        album: "Tana Talk 4",
        genero: "Rap",
        capa: "/img/Tanatalk4.png"
    },
    {
        id: 3,
        nome: "Imortais e Fatais",
        autor: "Baco Eu do Blues",
        album: "Esú",
        genero: "Hip-Hop",
        capa: "/img/Esu.png"
    }
];

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.render('inicial', {musicas});
});

app.get('/add', (req, res) => {
    res.render('add');
});

app.post('/a', (req, res) => {
    const musica = req.body;
    musica.id = musicas.lenght + 1;
    musicas.push(musica);

    res.redirect('/');
});

app.get('/delete/:id', (req, res) => {
    const id = req.params.id - 1;

    delete musicas[id];
    res.redirect('/');
});

app.get('/editar/:id', (req, res) => {
    const id = +req.params.id;
    const musica = musicas.find(musica => musica.id === id);

    res.render('edit', {musicas, musica});
});

app.post('/atualizado/:id', (req,res) => {
    const id = +req.params.id;
    console.log(id)
    const nMusica = req.body;
    nMusica.id = id ;
    console.log(nMusica);
    musicas[(id - 1)] = nMusica;
    res.redirect('/');
});

app.listen(port, () => console.log(`rodando em http://localhost:${port}`));