const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'asel2002',
  database: 'zchatdb',
});

db.connect((err) => {
  if (err) {
    console.error('MySQL connection error:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

// Kullanıcı kaydı
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
  db.query(sql, [username, password], (err, result) => {
    if (err) {
      console.error('MySQL query error:', err);
      res.status(500).send('Kayıt işlemi sırasında bir hata oluştu.');
    } else {
      res.status(200).send('Kullanıcı başarıyla kaydedildi.');
    }
  });
});

// Kullanıcı girişi
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
  db.query(sql, [username, password], (err, result) => {
    if (err) {
      console.error('MySQL query error:', err);
      res.status(500).send('Giriş işlemi sırasında bir hata oluştu.');
    } else {
      if (result.length > 0) {
        res.status(200).send('Giriş başarılı.');
      } else {
        res.status(401).send('Geçersiz kimlik bilgileri.');
      }
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
