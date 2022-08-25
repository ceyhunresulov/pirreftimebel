const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imgSchema = new Schema(
  {
    category_id: {
      type: String,
      require: true,
    },
    all: {
      type: Number,
      require: true,
    },
    desc: {
      type: String,
      require: true,
    },
    images: {
      type: Array,
      require: true,
    },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", imgSchema);

module.exports = Blog;
