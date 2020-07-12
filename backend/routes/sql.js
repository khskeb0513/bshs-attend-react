const Sequelize = require("sequelize");
const express = require('express')
const router = express.Router()
const {student, studentin} = require('../models')
const moment = require('moment')

router.get('/student', (req, res, next) => {
    res.send('r')
})

router.post('/student', (req, res, next) => {
    student.findAll({
        where: req.body
    }).then(
        (r) => {
            res.send(r)
        }, (e) => {
            console.error(e)
            res.send({e: 'error'})
        }
    )
})

router.post('/studentin', (req, res, next) => {
    studentin.findAll({
        where: req.body
    }).then(
        (r) => {
            res.send(r)
        }, (e) => {
            console.error(e)
            res.send({e: 'error'})
        }
    )
})

router.post('/studentin/create', (req, res, next) => {

    studentin.findAll({
        where: {
            st_id: req.body['st_id'],
            inDate: req.body['inDate'],
            "class": req.body['class']
        }
    }).then((r) => {
        console.log(r.length)
        if (r.length === 0) {
            studentin.create(req.body).then(
                (r) => {
                    res.send(r)
                }, (e) => {
                    console.error(e)
                    res.send({e: 'error'})
                }
            )
        } else {
            res.send({e: 'double'})
        }
    }, (e) => {
        console.error(e)
        res.send({e: 'error'})
    })

})

module.exports = router
