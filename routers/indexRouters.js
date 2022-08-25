const express = require("express");
// const multer = require("multer");
const Blog = require("../models/imgSchema");

const indexControllers = require("../controllers/indexControllers");
const uploadImg = require("../config/Multer");
const router = express.Router();

router.get("/", indexControllers.indexRout);
router.get("/about", indexControllers.aboutRout);
router.get("/catalog/:id", indexControllers.catalogRout);
router.get("/product/:id", indexControllers.productRout);
router.get("/contact", indexControllers.contactRout);
router.get("/admin", indexControllers.adminRout);
router.post("/admin", uploadImg.array("img", 4), (req, res) => {
  res.render("admin");
  console.log(req.body.category);
  const image = new Blog({
    category_id: req.body.category,
    all: 0,
    desc: req.body.desc,
    images: req.files,
  });
  image
    .save()
    .then((result) => {
      console.log("ugurlu");
    })
    .catch((err) => console.log(err));
});

module.exports = router;
