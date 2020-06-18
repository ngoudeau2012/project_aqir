const db = require("../models");
const passport = require("../config/passport");

module.exports = function(app) {
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    res.json({
      email: req.user.email,
      id: req.user.id,
      first_name: req.user.first_name,
      last_name: req.user.last_name,
      user_name: req.user.user_name,
    });
  });

  app.post("/api/signup", (req, res) => {
    db.User.create({
      email: req.body.email,
      password: req.body.password,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      user_name: req.body.user_name,
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      res.json({});
    } else {
      res.json({
        email: req.user.email,
        id: req.user.id,
        first_name: req.user.first_name,
        last_name: req.user.last_name,
        user_name: req.user.user_name,
      });
    }
  });

  app.get("/add-product", (req, res) => {
    res.render("newProduct");
  });

  app.get("/api/products/:id", (req, res) => {
    db.product
      .findOne({
        include: [db.User],
        where: {
          id: req.params.id,
        },
      })
      .then(dbProduct => {
        res.json(dbProduct);
      });
  });
  app.post("/api/addProduct", (req, res) => {
    db.product
      .create({
        product_name: req.body.product_name,
        price: req.body.price,
        quantity: req.body.quantity,
        product_category: req.body.product_category,
        product_photo: req.body.product_photo,
        product_description: req.body.product_description,
        UserId: req.user.id,
      })
      .then(
        res.redirect("/home")
      );
  });

  app.get("/", function(req, res) {
    res.render("signup");
  });

  app.get("/home", function(req, res) {
    db.product.findAll().then(data => {
      const products = {
        products: data,
      };
      console.log(products);
      res.render("home", products);
    });
  });

  app.get("/userAcct", function(req, res) {
    db.product
      .findAll({
        where: {
          UserId: req.user.id,
        },
        include: [db.User],
      })
      .then(data => {
        const products = {
          products: data,
        };
        console.log(products);
        res.render("userAcct", products);
      });
  });

  app.get("/login", function(req, res) {
    res.render("login");
  });
};
