const express = require("express");
const router = express.Router();

const { allBlogs } = require("../controllers/blogController");

router.get("/", allBlogs);

module.exports = router;
