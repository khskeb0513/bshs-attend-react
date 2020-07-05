const Sequelize = require("sequelize");
const express = require('express')
const router = express.Router()
const {student, studentin} = require('../models')
const moment = require('moment')

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
    console.log(req.body)
    studentin.create(req.body).then(
        (r) => {
            console.log(r)
            res.send(r)
        }, (e) => {
            console.error(e)
            res.send({e: 'error'})
        }
    )
})

module.exports = router
