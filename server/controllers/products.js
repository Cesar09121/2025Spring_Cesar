/*  B"H
*/
const model = require('../models/products')
const express = require('express')
const router = express.Router()

router
    .get('/', (req, res , next) => {

        model.getAll().then((data) => {
            res.send(data)
        }).catch(next) 

        

        res.send([{
            id: 1,
            name: 'Product 1',
            price: 10.99
        },
        {
            id: 2,
            name: 'Product 2',
            price: 20.99
        },
        {
            id: 3,
            name: 'Product 3',
            price: 30.99
        }])
    })
    .get('/:id', (req, res,next) => {
        const { id } = req.params


        model.get(id).then((data) => {
            res.send(data)
        }).catch(next)
        res.send({
            id,
            name: `Product ${id}`,
            price: 10.99 * id
        })
    })
    .post('/', (req, res,next) => {
       const newValues = req.body

       model.create(newValues).then((data) => {
        res.status(201).send(data)
       }).catch(next)
        res.send({
            id: 4,
            name,
            price
        })
    })
    .patch('/:id', (req, res,next) => {
        const { id } = req.params
        const newValues = req.body


        model.update(id, newValues).then((data) => {
            res.send(data)
        }).catch(next)
        const { name, price } = req.body
        res.send({
            id,
            name,
            price
        })
    })
    .delete('/:id', (req, res,next) => {
        const { id } = req.params

        model.remove(id).then((data) => {
            res.send(data)
        }).catch(next)
        res.send({
            message: `Product ${id} deleted`
        })
    })

module.exports = router