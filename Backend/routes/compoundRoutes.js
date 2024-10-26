const express = require('express');
const router = express.Router();
const compoundController = require('../controllers/compoundController');

router.get('/', compoundController.getAllCompounds);
router.post('/', compoundController.createCompound);
router.get('/:id', compoundController.getCompoundById);
router.put('/:id', compoundController.updateCompound);
router.delete('/:id', compoundController.deleteCompound);

module.exports = router;
