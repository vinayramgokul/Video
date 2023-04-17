const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
//const bcrypt = require('bcryptjs');


const app = express();
//const PORT = 80;
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "vid7788",
    password: "ThankYou44*6",
    database: "vid7788"
    
   });
  

app.listen(3002, ()=> {
    console.log("listening");
 } )




app.post('/register', (req, res) => {
    //const { firstName ,lastName, email, password , phoneNumber , gender ,age  ,product ,termsAgreed} = req.body;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password ;
    const phonenumber = req.body.phonenumber ;
    const gender = req.body.gender;
    const age = req.body.age;


    const product = req.body.product;
    const termsagreed = req.body.termsagreed;
   // const hashedPassword = bcrypt.hashSync(password, 10);
   
    db.query("INSERT INTO users (first_name ,last_name, email_data, password_data ,phone_number ,gender_data ,age_data ,product_data,termsagreed_data) VALUES (?,?,?,?,?,?,?,?,?)", [firstname ,lastname, email, password ,phonenumber ,gender ,age ,product , termsagreed], (err, result) => {
        if (err) {
            //console.log(err);
            return res.json(err);
        } 
        return res.json(result);
    })
});


app.post('/login' ,(req,res) => {

const sql = "SELECT * FROM users where `email_data` = ? AND `password_data` = ?";

db.query(sql ,[req.body.email ,req.body.password ] , (err,data) => {
    if(err){
        return res.json("Error");
    }
    if(data.length > 0 ) {

        return res.json("Success")
    }
    else
    {
        return res.json("Failed")

    }
})

})
// app.post('/login', (req, res) => {
//      const { email, password } = req.body;
//      db.query('SELECT * FROM users WHERE email = ?', [email], (err, result) => {
//          if (err) {
//              console.log(err);
//              res.status(500).send('Error logging in user');
//          } else if (result.length === 0) {
//              res.status(400).send('User not found');
//          } else {
//              const hashedPassword = result[0].password;
//              if (bcrypt.compareSync(password, hashedPassword)) {
//                  res.status(200).send('User logged in successfully');             } else {
//                  res.status(400).send('Invalid password');
//              }
//          }
//      });
//  });

//export default server;

// CREATE TABLE users (
//     id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
//     firstname VARCHAR(50) NOT NULL,
//     lastname VARCHAR(50) NOT NULL,
//     email VARCHAR(100) NOT NULL,
//     password VARCHAR(255) NOT NULL ,
//     phonenumber VARCHAR(255) NOT NULL ,
//     gender VARCHAR(255) NOT NULL,
//     age VARCHAR(255) NOT NULL ,
//     product VARCHAR(255) NOT NULL ,
//     termsagreed BOOLEAN NOT NULL DEFAULT FALSE
    
// );