const express = require('express');
const router = express.Router();

const controller = require('../controllers/activitiesController');
const validation = require('../middleware/validate');

router.get('/', controller.getAll);
router.get('/:id', controller.getSingle);
router.post('/', validation.saveActivity, controller.createActivity);
router.put('/:id', validation.saveActivity, controller.updateActivity);
router.delete('/:id', controller.deleteActivity);

module.exports = router;