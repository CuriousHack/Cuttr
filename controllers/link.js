const dotenv = require('dotenv');
const Link = require('../models/link')

dotenv.config();
// const APP_URL = process.env.APP_URL;


const getCuttr = (req, res) => {

    Link.find({})
    .then((links) => {
        res.status(200).send(links)
    })
    .catch((err) => {
        res.status(404).send(err)
    })
}

const getCuttrByKey = (req, res) => {
    const { key } = req.params;

    Link.findOne({ key })
    .then((link) => {
        if(link){
            res.status(200).send({
                "message": "Link found",
                "data": link 
            })
        }else{
            res.status(404).send({"message": "Link not Found"})
        }
        
    })
    .catch((err) => {
        res.status(404).send(err)
    })
            
}

const postCuttr = (req, res) => {
    //accept incoming request body
    const {long_url } = req.body;
    console.log(long_url);

    // validate incoming request body
    if (!long_url) {
        return res.status(400).json({ error: 'Long URL is required' });
    }

    // generate 7 character base 64 string
    const generateShortUrl = () => {
        return Buffer.from(Math.random().toString(36).substring(2, 9)).toString('base64').substring(0, 7);
    }

    //create new cuttr
    const newLink = {
        key: generateShortUrl(),
        long_url: long_url,
    }
    Link.create(newLink)
    .then((newLink) => {
        res.status(201)
        .send({
            "message": "Link Cut Successfully",
            "data": newLink
    })
    })


}

const putCuttr = (req, res) => {
    const key = req.params.key
    const link = req.body
    console.log(link)
    Link.findOneAndUpdate({key: key}, link, {new: true})

    .then((link) => {
        res.status(200)
        .send({
            "message": "Link updated Successfully",
            "data": link
        })
    })
    .catch((err) => {
        res.status(500).send({
            "message": "Unable to update link",
            "data": err
        })
    })
}

const deleteCuttr = (req, res) => {
    const key = req.params.key
    Link.findOneAndDelete({ key })
    .then(() => {
        res.status(200).send("link deleted successfully")
    })
    .catch((err) => {
        res.status(500).send("Unable to delete link")
    })
}

module.exports = {
    getCuttr,
    getCuttrByKey,
    postCuttr,
    putCuttr,
    deleteCuttr
}