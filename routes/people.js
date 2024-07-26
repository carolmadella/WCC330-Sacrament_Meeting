const express = require('express');
const router = express.Router();
const peopleController = require('../controllers/peopleController');

router.get('/', peopleController.getAllPeople);
router.get('/:id', peopleController.getPeopleById);
router.post('/', peopleController.createPeople);
router.put('/', peopleController.updatePeople);
router.delete('/', peopleController.deletePeople);

module.exports = router;