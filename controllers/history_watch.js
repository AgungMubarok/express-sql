// UPDATE subscribtion set status = false where ID = 1 
const connection = require('../config/database');
const bcrypt = require('bcrypt')

module.exports = {
    getHistoryWatch: (req, res) => {
        const myQuery = `SELECT history_watch.id_history, history_watch.id_subscription, history_watch.id_user, users.fullname, history_watch.id_movie, movies.title 
        FROM history_watch
        INNER JOIN users ON history_watch.id_user = users.id_user
        INNER JOIN movies ON history_watch.id_movie = movies.id_movie 
        INNER JOIN subscriptions ON history_watch.id_subscription = subscriptions.id_subscription
        WHERE subscriptions.status = true`;
        connection.query(myQuery, (error, result) => {
            if (error) {
                console.log(error)
                res.send({
                    message: 'error',
                    status: 500
                })
            } else {
                res.send({
                    message: 'get subscription data',
                    status: 200,
                    result
                })
            }
        })
    },
    addHistory: (req, res) => {
        const { id_user, id_movie, id_subscription } = req.body
        const myQuery = `INSERT INTO history_watch(id_movie, id_user, id_subscription) VALUES("${id_movie}", "${id_user}", "${id_subscription}")`;
        connection.query(myQuery, (error, result) => {
            if (error) {
                console.log(error)
                res.send({
                    message: 'you have not subscribed yet',
                    status: 500
                })
            } else {
                res.send({
                    message: 'subscribe successfully',
                    status: 200,
                    result
                })
            }
        })
    }
}