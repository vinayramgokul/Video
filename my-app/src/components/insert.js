const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
  user: 'vid7788',
  password: 'ThankYou44*6',
  database: 'vid7788'
  });
  
  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to database: ' + err.stack);
      return;
    }
  
    console.log('Connected to database.');
  });
  
  app.post('/api/insert', (req, res) => {
    const { username, password, email } = req.body;
  
    const sql = `INSERT INTO users (first_name ,last_name, email_data, password_data ,phone_number ,gender_data ,age_data ,product_data,termsagreed_data) VALUES ('${firstname}', '${lastname}', '${email} ,${password}', '${phonenumber}', '${gender} ,${age}', '${product}', '${termsagreed}')`;
  
    connection.query(sql, (err, result) => {
      if (err) throw err;
  
      console.log('User registered successfully.');
  
      res.send({ success: true, message: 'User registered successfully.' });
    });
  });
  