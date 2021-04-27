const { Router } = require('express');
const { exerciseGet} = require('../controllers/exercises');

const router = Router();

router.get('/:id', exerciseGet);





module.exports = router;