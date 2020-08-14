const connection = require('../config/database');
const bcrypt = require('bcrypt')

module.exports = {
    getAllMovie : (req, res) => {
        const myQuery = 'SELECT * from movies'
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
    getOneMovie : (req, res) => {
        const {id} = req.params
        const myQuery = `SELECT * FROM movies WHERE id_movies=${id}`
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
    createMovie : (req, res) => {
        const {title, year, genre, description, url_trailer} = req.body
        const myQuery = `INSERT INTO users(title, year, genre, description, url_trailer) VALUES("${title}", "${year}", "${genre}", "${description}", "${url_trailer}")`;
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
}