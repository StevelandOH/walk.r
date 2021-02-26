const express = require('express');
const asyncHandler = require('express-async-handler');
const { Activity, Pet } = require('../../db/models');

const router = express.Router();

router.post(
    '/',
    asyncHandler(async (req, res) => {
        console.log(req);
        const {
            type,
            date,
            time,
            actDistance,
            focus,
            duration,
            notes,
            userId,
        } = req.body;
        const pet = await Pet.findOne({ where: { userId: userId } });
        const activity = await Activity.create({
            type: type,
            date: date,
            time: time,
            actDistance: actDistance,
            focus: focus,
            duration: duration,
            notes: notes,
            petId: pet.id,
        });
        return res.json({ activity });
    })
);
module.exports = router;
