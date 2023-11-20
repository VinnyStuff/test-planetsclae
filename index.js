/* require('dotenv').config()

const mysql = require('mysql2')

// Create the connection to the database
const connection = mysql.createConnection(process.env.DATABASE_URL)

// simple query
connection.query('show tables', function (err, results, fields) {
  console.log(results) // results contains rows returned by server
  console.log(fields) // fields contains extra metadata about results, if available
})

// Example with placeholders
connection.query('select 1 from dual where ? = ?', [1, 1], function (err, results) {
  console.log(results)
})

connection.end() */

import express from 'express';
import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const app = express(); 
const connection = await mysql.createConnection(process.env.DATABASE_URL);
connection.connect();

app.listen(3000, () => {
  console.log("app is listening");
})

connection.query('show tables', function (err, results, fields) {
  console.log(results) // results contains rows returned by server
  console.log(fields) // fields contains extra metadata about results, if available
})

app.get('/test', async (req, res) => {
  connection.query('SELECT * FROM exemplo', function (err, rows, fields) {
    if (err) throw err

    res.send(rows)
  })
});

