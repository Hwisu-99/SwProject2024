const express = require('express');
const authenticateJWT = require('../middleware/authenticateJWT');
const { Lecture } = require('../models');
const router = express.Router();

// router.get('/:lecture_id', asyncc(req, res, next) => {
//     // router.get('/:lecture_id', authenticateJWT, async (req, res, next) => {
//     Lecture.findOne({
//         where: {
//             id: req.params.lecture_id,
//         }
//     })
//         .then(result => {
//             res.status(201).send(result)
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: "Error to read memo with lecture_id=" + req.params.lecture_id
//             });
//         });
// });

router.get('/:lecture_id', async (req, res, next) => {
    Lecture.findAll({
        where: {
            id: req.params.lecture_id,
        }
    })
        .then(result => {
            res.status(201).send(result)
        })
        .catch(err => {
            res.status(500).send({
                message: "Error to read memo with memo_id=" + req.params.lecture_id
            });
        });
});


module.exports = router;