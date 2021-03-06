const connection = require('../config/database');
const bcrypt = require('bcrypt')

module.exports = {
    getAllUser : (req, res) => {
        const myQuery = 'SELECT * from users'
        connection.query(myQuery, (error, result, field) => {
            if(error){
                res.send({
                    message: 'error',
                    status: 500
                })
            } else {
                res.send({
                    message: 'get all data',
                    status: 200,
                    result
                })
            }
        })
    },
    getOneUser : (req, res) => {
        const {id} = req.params
        const myQuery = `SELECT * FROM users WHERE id_user=${id}`
        connection.query(myQuery, (error, result) => {
            if(error){
                res.send({
                    message: 'error',
                    status: 500
                })
            } else {
                res.send({
                    message: 'get one data',
                    status: 200,
                    result
                })
            }
        })
    }, 
    create : (req, res) => {
        const {fullname, username, email, password, address} = req.body
        bcrypt.hash(password,8, (error, hashedPassword) => {
            if(error) {
                res.send({
                    message: "password invalid"
                })
            } else {
                const myQuery = `INSERT INTO users(fullname, username, email, password, address) VALUES("${fullname}", "${username}", "${email}", "${hashedPassword}", "${address}")`;
                connection.query(myQuery, (error, result) => {
                    if(error){
                        console.log(error)
                        res.send({
                            message: 'error',
                            status: 500
                        })
                    } else {
                        res.send({
                            message: 'add One data',
                            status: 200,
                            result
                        })
                    }
                })

            }
        })
    }
}