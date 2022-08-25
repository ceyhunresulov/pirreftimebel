const Blog = require("../models/imgSchema");

const indexRout = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      const childs = result.filter((elm) => elm.category_id == 5);
      res.render("index", { images: result, childs: childs });
    })
    .catch((err) => console.log(err));
};
const aboutRout = (req, res) => {
  res.render("about");
};
const catalogRout = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      if (req.params.id != 0) {
        const products = result.filter(
          (elm) => elm.category_id == req.params.id
        );
        res.render("catalog", { data: products, all: result });
      } else if (req.params.id == 0) {
        const product = result.filter((elm) => elm.all == 0);
        res.render("catalog", { data: product, all: result });
      }
    })
    .catch((err) => console.log(err));
};
const productRout = (req, res) => {
  Blog.findById(req.params.id)
    .then((result) => {
      res.render("product", { data: result });
    })
    .catch((err) => console.log(err));
};
const contactRout = (req, res) => {
  res.render("contact");
};
const adminRout = (req, res) => {
  res.render("admin");
};

module.exports = {
  indexRout,
  aboutRout,
  catalogRout,
  productRout,
  contactRout,
  adminRout,
};
