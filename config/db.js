const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'designsocial',
});

//prueba de conexión
connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('conexión ok');
  }
});

module.exports = connection;
