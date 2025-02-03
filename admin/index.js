const express = require('express');
const app = express();
const userModel= require('../admin/models/user');
const { log } = require('console');

const cookieParser = require('cookie-parser');
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'views')));

// Fixed Admin Credentials
const ADMIN_EMAIL = "admin@example.com";  
const ADMIN_PASSWORD_HASH = "$2b$10$aIf6laZ.rfVc.QznLhogQO4VWSKN8B0Cq8DHzRArShaXH/G2VYFE2";  //Password is admingood



//

// const password = "admingood";
// const saltRounds = 10;

// bcrypt.hash(password, saltRounds, (err, hash) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log("New Hashed Password:", hash);
//     }
// });


app.get("/", (req, res) => {
    res.render("login");
});


// app.post("/create",  (req,res)=>{
//     let {username, email, Password, age} =req.body;

//     bcrypt.genSalt(10, (err,salt)=>{

     
        
//         bcrypt.hash(Password,salt, async (err, hash)=>{
//             let createdUser = await userModel.create({
//                 username,
//                 email,
//                 password: hash,
//                 age
//                }) 
//              let token = jwt.sign({email}, 'shhhhh');
//              res.cookie("token", token);
//              res.send(createdUser)
                
            
//          })

        
        

//     })
// })

app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    if (email !== ADMIN_EMAIL) {
        return res.send("Unauthorized Access");
    }

    bcrypt.compare(password, ADMIN_PASSWORD_HASH , function (err, result) {
        if (result) {
            let token = jwt.sign({ email }, 'shhhhh');
            res.cookie("token", token);
            //res.send("Admin Login Successful");
            res.redirect("adminhome")
        } else {
            res.send("Incorrect Password");
        }
    });
});

app.get("/adminhome", (req,res)=>{
    res.render("adminhome")
})
   


app.get("/logout", (req, res) => {
    res.cookie("token", "");  
    res.redirect("/");
});

app.listen(4000, () => {
    console.log("Server is running on port 4000");
});
