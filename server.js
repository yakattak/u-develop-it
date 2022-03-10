const express = require('express');
const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});



//connect to database

const db = mysql.createConnection(
    {
        host: 'localhost',
        //mysqlusername,
        user: 'root',
        //password
        password: 'W&a94ixN%c2y3ho>^&3K',
        database: 'election'

    },
    console.log('Connected to election database')
)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});