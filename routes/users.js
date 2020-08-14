// menggunakan express Routers
const router = require('express').Router()

const {
    getAll,
    getOne,
    addOne
} = require('../controllers/users')

router.get('/users', getAll);
router.get('/users/:id', getOne);
router.post('/users/register', addOne);

module.exports = router