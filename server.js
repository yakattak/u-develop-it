const express = require('express');
const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;
const app = express();

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

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
  });

  // Delete a candidate
//db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
    //if (err) {
 //     console.log(err);
  //  }
 //   console.log(result);
  //});

  //create a candidate

const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
                    VALUES (?, ?, ?, ?)`;

const params = [1, 'Ronald', 'Firbank', 1];

db.query(sql, params, (err, result) => {
    if (err) {
        console.log(err);
    }
    console.log(result);
})

//get a single candidate
//db.query(`SELECT * FROM candidates WHERE id=1`, (err, row) => {
  //  if (err) {
    //    console.log (err);
      //  }
        //console.log(row);
//})

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});



//connect to database



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});