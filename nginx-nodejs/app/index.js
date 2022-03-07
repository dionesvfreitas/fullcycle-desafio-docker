const express = require('express');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
});

const app = express();

app.get('/', async (_, res) => {

    connection.query('INSERT INTO USERS(NAME) VALUES (?)', ['Diones'.concat(Math.random())]);
    
    let result = '<h1>FullCycle Rocks!</h1><ul>';
    
    connection.query('SELECT NAME FROM USERS', function(error, results, fields) {
        if(error) throw error;
        
        results.forEach(element => {
            const { NAME } = element;
            result = result.concat('<li>', NAME, '</li>');
        });
        res.send(result.concat('</ul>'));
    });
});

connection.connect((error) => {
    if (error) {
        console.log('connection error: ', error);
    } else {
        connection.query('CREATE TABLE IF NOT EXISTS USERS (id integer not null auto_increment primary key, name varchar(100) not null)');
        app.listen(3000, () => {
            console.log('Application is running on port 3000');
        });
    }
});