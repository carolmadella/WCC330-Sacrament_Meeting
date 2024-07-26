const express = require('express');
const router = express.Router();
const speakersController = require('../controllers/speakersController');

router.get('/', speakersController.getAllSpeakers);
router.get('/:id', speakersController.getSpeakerById);
router.post('/', speakersController.createSpeaker);
router.put('/', speakersController.updateSpeaker);
router.delete('/', speakersController.deleteSpeaker);

module.exports = router;