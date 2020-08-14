// menggunakan express Routers
const router = require('express').Router()

// user
const {
    getAllUser,
    getOneUser,
    create
} = require('../controllers/users')
// movies
const {
    getAllMovie,
    getOneMovie,
    createMovie
} = require('../controllers/movies')
// subrek
const {
    getSubcription,
    subscription
} = require('../controllers/subscriptions')
// history
const {
    getHistoryWatch,
    addHistory
} = require('../controllers/history_watch')

// user
router.get('/users', getAllUser);
router.get('/users/:id', getOneUser);
router.post('/users/register', create);
// movies
router.get('/movies', getAllMovie);
router.get('/movies/:id', getOneMovie);
router.post('/movies/upload', createMovie);
// subrek
router.get('/subs', subscription);
router.get('/subs', getSubcription);
// history
router.get('/history', getHistoryWatch);
router.get('/historyy', addHistory);

module.exports = router