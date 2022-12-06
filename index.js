const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
 const bcrypt = require('bcrypt');
 var cookieParser = require('cookie-parser');
const mysql = require('mysql');
const session = require('express-session');
const cors = require('cors');
 const alert = require("alert");


const app = express();

app.use(express.static('public'));
app.use(cookieParser());
app.use(cors())
app.set('view engine', 'ejs');


var con = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'node_project',
    dateStrings: true
});
  



app.listen('8080');
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({secret:"secret"}));

app.get('/location', function(req,res) {
  res.render('pages/location');
})
app.get('/FAQ', function(req,res) {
  res.render('pages/FAQ');
})
app.get('/about', function(req,res) {
  res.render('pages/about');
})
app.get('/account', function(req,res) {
  res.render('pages/account');
})

app.get('/accountinput', (req, res)=>{
   const id = req.cookies['users'];
  if(id != null){
    const sql = "SELECT * FROM User_Information where id=?";

        con.query(sql, id, function(err, rows){
          const Userdata = rows[0];
          res.status(200).json(Userdata);

        })
}
})
app.post('/account_personalInfo', (req, res)=>{
  const id = req.cookies['users'];
  if(id != null){
  const sql = "UPDATE User_Information SET Photo= ?, name=?, birthday=? where id=?";
  con.query(
        sql,
        [req.body.Photo, req.body.name, req.body.birthday, id],
        (err, res)=>{
          if(err) throw (err);
          console.log("Update the Personal Information sucessfully");
        }
    )
}
})

app.post('/account_ContactInfo', (req, res)=>{
  const id = req.cookies['users'];
  if(id != null){
  const sql = "UPDATE User_Information SET email=?, phone= ?, streetaddress=?, city=?, state=?, zipcode=? WHERE id = ?"; 
  con.query(
          sql,
          [req.body.email,req.body.phone,req.body.streetaddress,req.body.city,req.body.state,req.body.zipcode, id],
          (err, res)=>{
           if (err) throw err;
           console.log("Update the contact Information sucessfully");
          }
          )


}else{
  alert("You must login your acccunt first");
}
})

app.post('/account_UserInfo', (req, res)=>{
  const id = req.cookies['users'];
  if(id != null){
    let password = req.body.Password;
    console.log(password);
    if(password.length === 0){
       const sql = "UPDATE User_Information SET username=? WHERE id = ?";
        con.query(
          sql,
          [req.body.username, id],
          (err, res)=>{
           if (err) throw err;
           alert("Update the User Information sucessfully");
          }
          )
    }else if(password.length < 8 && password.length > 0){
   
    alert('The password need to at least 8 characters');
  }else{

    bcrypt.genSalt(10, (err, salt)=>{
      bcrypt.hash(req.body.Password, salt, function(err, hash){
         req.body.Password = hash;
         console.log(hash);
         const sql = "UPDATE User_Information SET username=?, Password = ? WHERE id = ?";
         con.query(
          sql,
          [req.body.username, req.body.Password, id],
          (err, res)=>{
           if (err) throw err;
           alert("Update the User Information sucessfully");
          }
          )
        
      });
    });
  }


  }else{
    alert("You must login your acccunt first")
  }
})

app.post('/logout',(req,res)=>{
   res.clearCookie('users');
   console.log('The user logout sucessfully');
   res.redirect('/login');
})
app.get('/register', (req, res)=>{
  res.render('pages/register');
})
app.post('/register', (req, res)=>{
  bcrypt.genSalt(10, (err, salt)=>{
      bcrypt.hash(req.body.Password, salt, function(err, hash){
         req.body.Password = hash;
         const userDetails= req.body;
         var sql = "INSERT INTO User_Information SET ?";

        con.query(sql ,userDetails ,function (err, result) {
       if (err) throw err;
        console.log("1 record inserted");

      });
        
      });
    });
  
  res.redirect('login');
})
app.get('/login', function(req,res) {
  res.render('pages/login');
})
app.post('/login', (req, res)=>{
  const Username = [req.body.username];
  const sql = "SELECT id, password FROM User_Information where username=?";


  con.query(sql, Username, function(err, rows){
    if(rows.length != 0){
      console.log(rows);
      const id = rows[0]['id'];
      var password_hash = rows[0]['password'];
      bcrypt.compare(req.body.Password, password_hash, function(err, result){
        if(result){
           console.log('The password is match');
           res.cookie('users', id, {maxAge: 360000});
           res.redirect('account');
        }else{
          alert("password not match");
        }
      });
    }else{
          alert("Username or password are not existed");
    }
  });
})

app.post('/enterEmail', (req, res)=>{
  const email = [req.body.email];
  const sql = "SELECT id FROM User_Information where email=?";

  con.query(sql, email, (err, rows)=>{
    if(rows.length != 0){
      console.log(rows);
      const id = rows[0]['id'];
      res.cookie('id', id);
      res.redirect('code');
    }else{
      alert("The email didn't existed ")
    }
  })
})

app.get('/code', function(req,res) {
  res.render('pages/code');
})

app.post('/code', (req,res)=>{
  res.redirect('changepass');
})

app.get('/changepass', function(req,res) {
  res.render('pages/changepass');
})

app.post('/changepass', (req, res)=>{
  const id = req.cookies['id'];
   bcrypt.genSalt(10, (err, salt)=>{
      bcrypt.hash(req.body.Password, salt, function(err, hash){
         req.body.Password = hash;
         const sql2 = "UPDATE User_Information SET Password = ? WHERE id = ?";
         con.query(
          sql2,
          [req.body.Password, id],
          (err, res)=>{
           if (err) throw err;
           console.log("Update the password");
          }
          )
        
      });
    });
  res.clearCookie('id');
  res.redirect('login');

})


app.get('/product', (req, res) => {

  var con = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'node_project',
    dateStrings: true
  })

  con.query('SELECT * FROM products', (err, result) => {

    res.render('pages/product', {result:result});
  })

});


app.get('/recover', function(req,res) {
  res.render('pages/recover');
})
app.get('/register', function(req,res) {
  res.render('pages/register');
})

function isProductInCart(cart, id) {

  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id == id) {
      return true;
    }
  }

  return false;
}

function calculateTotal(cart, req) {
  total = 0;
  for (let i = 0; i < cart.length; i++) {
    // if item is on sale
    if (cart[i].sale_price) {
      total += cart[i].sale_price * cart[i].quantity;
    } else {
      total += cart[i].price * cart[i].quantity;
    }
  }
  total = total * 1.1;
  total = total.toFixed(2);
  req.session.total = total;
  return total;
}

app.get('/', (req, res) => {

  var con = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'node_project',
    dateStrings: true
  })

  con.query('SELECT * FROM products', (err, result) => {

    res.render('pages/index', {result:result});
  })

});

app.post('/add_to_cart', function(req,res) {

  var id = req.body.id;
  var name = req.body.name;
  var price = req.body.price;
  var sale_price = req.body.sale_price;
  var quantity = req.body.quantity;
  var image = req.body.image;
  var product = {id:id, name:name, price:price, sale_price:sale_price, quantity:quantity, image:image};

  if (req.session.cart) {
    var cart = req.session.cart;

    if (!isProductInCart(cart, id)) {
      cart.push(product);
    }
  } else {

    req.session.cart = [product];
    var cart = req.session.cart;

  }

  // calculate total
  calculateTotal(cart, req);

  // return to cart page
  res.redirect('/cart');

});

app.get('/cart', function(req,res) {

  var cart = req.session.cart;
  var total = req.session.total;
  res.render('pages/cart', {cart:cart, total:total});
});

app.post('/remove_product', function(req, res) {

  var id = req.body.id;
  var cart = req.session.cart;

  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id == id) {
      cart.splice(cart.indexOf(i), 1);
    }
  }

  // re-calculate total
  calculateTotal(cart, req);
  res.redirect('/cart');

});

app.post('/edit_product_quantity', function(req,res) {

  // get values from inputs
  var id = req.body.id;
  var quantity = req.body.quantity;
  var increase_btn = req.body.increase_product_quantity;
  var decrease_btn = req.body.decrease_product_quantity;

  var cart = req.session.cart;

  if (increase_btn) {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id == id) {
        if (cart[i].quantity > 0) {
          cart[i].quantity = parseInt(cart[i].quantity) + 1;
        }
      }
    }
  }

  if (decrease_btn) {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id == id) {
        if (cart[i].quantity > 1) {
          cart[i].quantity = parseInt(cart[i].quantity) - 1;
        }
      }
    }
  }

  calculateTotal(cart, req);
  res.redirect('/cart');

});

app.get('/checkout', function(req,res) {
  var total = req.session.total;
  res.render('pages/checkout', {total:total});
})

app.post("/place_order", function(req,res) {

  var name = req.body.name;
  var email = req.body.email;
  var phone = req.body.phone;
  var city = req.body.city;
  var address = req.body.address;
  var cost = req.session.total;
  var status = "not paid";
  var date = new Date();
  var products_ids = "";

  var con = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'node_project'
  })

  var cart = req.session.cart;
  for (let i = 0; i < cart.length; i++) {
    products_ids = products_ids + "," +cart[i].id;
  }

  con.connect((err) => {
    if (err) {
      console.log(err);
    } else {
      var query = "INSERT INTO orders(cost,name,email,status,city,address,phone,date,products_ids) VALUES?";
      var values = [
        [cost,name,email,status,city,address,phone,date,products_ids]
      ];

      con.query(query, [values], (err,result) => {
        res.redirect('/payment');
      })
    }
  })

})

app.get('/payment', function(req,res) {
  var total = req.session.total;
  res.render('pages/payment', {total:total});
})