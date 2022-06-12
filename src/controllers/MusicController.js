const Song = require('../models/Music');

const getAll = async (req, res) => {
    try{
        const songs = await Song.findAll();
        res.render("inicial", {songs})
    }catch(err) {
        res.status(500).send({err: err.message})
    }
}

module.exports={
    getAll
}