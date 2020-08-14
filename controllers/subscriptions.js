// UPDATE subscribtion set status = false where ID = 1 
const connection = require('../config/database');
const bcrypt = require('bcrypt')

module.exports = {
    getSubcription: (req, res) => {
        const myQuery = 'SELECT subscriptions.id_subscription, subscriptions.id_user, users.fullname, users.username, subscriptions.status FROM subscriptions INNER JOIN users ON subscriptions.id_user = users.id_user'
        connection.query(myQuery, (error, result) => {
            if (error) {
                res.send({
                    message: 'error',
                    status: 500
                })
            } else {
                res.send({
                    message: 'get subscripton data',
                    status: 200,
                    result
                })
            }
        })
    },
    subscription: (req, res) => {
        const { id_user, status } = req.body
        const myQuery = `INSERT INTO subscriptions(id_user, status) VALUES("${id_user}", "${status}")`;
        connection.query(myQuery, (error, result) => {
            if (error) {
                console.log(error)
                res.send({
                    message: 'error',
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