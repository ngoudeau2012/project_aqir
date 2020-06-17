// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./public/uploads");
  },
  filename: function(req, res, cb) {
    cb(null, file.filename);
  }
});
const fileFilter = (req, res, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});
module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id,
      first_name: req.user.first_name,
      last_name: req.user.last_name,
      user_name: req.user.user_name
    });
  });
  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", (req, res) => {
    db.User.create({
      email: req.body.email,
      password: req.body.password,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      user_name: req.body.user_name
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });
  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id,
        first_name: req.user.first_name,
        last_name: req.user.last_name,
        user_name: req.user.user_name
      });
    }
  });

  app.get("/add-product", (req,res) => {
    res.render("newProduct");
  });

  app.get("/api/products", (req, res) => {
    db.product
      .findAll({
        include: [db.User]
      })
      .then(dbProduct => {
        res.json(dbProduct);
      });
  });
  app.get("/api/products/:id", (req, res) => {
    db.product
      .findOne({
        include: [db.User],
        where: {
          id: req.params.id
        }
      })
      .then(dbProduct => {
        res.json(dbProduct);
      });
  });
  app.post("/api/addProduct", (req, res) => {
    console.log(req.file);
    db.product.create({
      product_name: req.body.product_name,
      price: req.body.price,
      quantity: req.body.quantity,
      product_category: req.body.product_category,
      product_photo: req.body.product_photo,
      product_description: req.body.product_description
    });
  });
  app.get("/", function(req, res){
    res.render("signup");
});
app.get("/home", function(req, res){
  res.render("home");
});
app.get("/login", function(req, res){
  res.render("login");
});
};