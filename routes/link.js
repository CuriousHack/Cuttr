const express = require('express')
const { getCuttr, getCuttrByKey, postCuttr, putCuttr, deleteCuttr } = require('../controllers/link.js')

const cuttrRoute = express.Router()

cuttrRoute.get('/', (req, res) => {
    getCuttr(req, res)
})

cuttrRoute.get('/:key', (req, res) => {
    getCuttrByKey(req, res)
})

cuttrRoute.post('/', (req, res) => {
   postCuttr(req, res)
})

cuttrRoute.put('/:key', (req, res) => {
    putCuttr(req, res)    
})

cuttrRoute.delete('/:key', (req, res) => {
    deleteCuttr(req, res)
})



module.exports = cuttrRoute