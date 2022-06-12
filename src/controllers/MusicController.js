const Song = require('../models/Music');

const getAll = async (req, res) => {
    try{
        const songs = await Song.findAll();
        res.render("inicial", {songs})
    }catch(err) {
        res.status(500).send({err: err.message})
    }
};

const add = async (req, res) => {
    try{
        res.render('add');
    }catch(err) {
        res.status(500).send({err: err.message})
    }
};

const a = async (req, res) => {
    try{
        const music = req.body;

        await Song.create(music);
        res.redirect("/");
        
    }catch(err) {
        res.status(500).send({err: err.message});
    }
}

const edit = async (req, res) => {
    const music = await Song.findByPk(req.params.id);

    res.render("edit", {music} )
}

const done = async (req, res) => {
    try{
        const music = await Song.findByPk(req.params.id);
        const { nome, autor, album, capa } = req.body;

        music.nome = nome;
        music.autor = autor;
        music.album = album;
        music.capa = capa;

        const newMusic = await music.save();
        res.redirect('/')

    }catch(err) {
        res.status(500).send({err: err.message})
    }
}

const delet = async (req, res) => {
    try{
        const music = await Song.findByPk(req.params.id);
        await music.destroy();
        res.redirect('/')
    }catch(err) {
        res.status(500).send({err: err.message})
    }
}

module.exports={
    getAll, 
    add,
    a,
    edit,
    done,
    delet
}