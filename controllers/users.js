const connection = require('../config/database');
const bcrypt = require('bcrypt')

module.exports = {
    //getall
    getAll : (req, res) => {
        // query sql
        const myQuery = 'SELECT * from users'
        // menjalankan query yang kita buat
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
    //getOne
    getOne : (req, res) => {
        // mengambil ID dari parameter
        const {id} = req.params
        // query GET ONE
        const myQuery = `SELECT * FROM users WHERE id=${id}`
        // jalankan query mysql
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
    //addOne
    addOne : (req, res) => {
        // mendapatkan data dari form body / input
        const {name, email, password} = req.body
        // hash password input sebagai random number/string
        bcrypt.hash(password,6, (error, hashedPassword) => {
            if(error) {
                res.send({
                    message: "password invalid"
                })
            } else {
                // query insert
                const myQuery = `INSERT INTO users(name, email,password) VALUES("${name}", "${email}", "${hashedPassword}")`;
                // eksekusi query
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
    //update
    //delete
}