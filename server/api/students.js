'use strict'

const router = require('express').Router()
const db = require('./')
const {Students, Campuses} = require('../db/models')

router.get('/', (req,res,next)=>{
    return Students.findAll({
        include: Campuses
    })
    .then(allStudents=>res.json(allStudents))
    .catch(next)
})

router.get('/:studentId',(req,res,next)=>{
    return Students.findById(req.params.studentId,{
        include: Campuses
    })
    .then(foundStudent=>res.json(foundStudent))
    .catch(next)
})

// router.get('/campus/:campusId',(req,res,next)=>{
//     return Students.findAll({
//         where:{campusId: req.params.campusId}
//     })
//     .then(foundStudents=>res.json(foundStudents))
//     .catch(next)
// })

router.post('/',(req,res,next)=>{
    return Students.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        gpa: req.body.gpa
    })
    .then(createdStudent=>res.status(201).send(createdStudent))
    .catch(next)
})

router.put('/:studentId',(req,res,next)=>{
    return Students.findById(req.params.studentId)
    .then(foundStudent=>foundStudent.update(req.body))
    .then(updatedStudent=> res.status(202).send(updatedStudent))
    .catch(next)
})

router.delete('/:studentId',(req,res,next)=>{
    return Students.findById(req.params.studentId)
    .then(foundStudent=>foundStudent.destroy())
    .then(()=> res.status(200).send())
    .catch(next)
})

module.exports = router