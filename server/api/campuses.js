'use strict'

const router = require('express').Router()
const db = require('./')
const {Students, Campuses} = require('../db/models')

router.get('/', (req, res, next)=>{
    return Campuses.findAll()
    .then(allCampuses=>res.json(allCampuses))
    .catch(next)
})

router.get('/:campusId', (req,res,next)=>{
    return Campuses.findById(req.params.campusId,{
        include: Students
    })
    .then(foundCampus=>res.json(foundCampus))
    .catch(next)
})

router.post('/',(req,res,next)=>{
    return Campuses.create({
        name: req.body.name,
        imageUrl: req.body.imageUrl||undefined,
        description: req.body.description
    })
    .then((createdCampus)=>res.status(201).send(createdCampus))
    .catch(next)
})

router.put('/:campusId',(req,res,next)=>{
    return Campuses.findById(req.params.campusId)
    .then(foundCampus=>foundCampus.update(req.body))
    .then(updatedCampus=> res.status(202).send(updatedCampus))
    .catch(next)
})

router.delete('/:campusId',(req,res,next)=>{
    return Campuses.findById(req.params.campusId)
    .then(foundCampus=>foundCampus.destroy())
    .then(()=> res.status(200).send())
    .catch(next)
})


module.exports = router