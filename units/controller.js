const { validateUnit } = require('./validator.js');

const router = require('express').Router();

let units = [
    {
        id: 1,
        name: "warrior",
        type: "melee",
        attack: 10,
        defense: 20
    }
];

let nextUnitId = 2;

// endpoints-----------------------------
router.get('/', (req, res) => {
    res.status(200).json(units);
});

router.get('/:id', (req, res) => { });

router.post('/', (req, res) => {
    const unitInformation = { id: nextUnitId++, ...req.body };

    const validation = validateUnit(unitInformation);

    if (validation.success) {
        units = [...units, unitInformation];

        res.status(201).json(unitInformation)
    } else {
        res.status(400).json(validation)
    }
});

module.exports = router;

