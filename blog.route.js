const { readBlogs, createBlogs, updateBlogs, deleteBlogs } = require("./blog.controller")

const router = require("express").Router()

// .get("/", readBlogs)
// METHOD=>GET
// URL=> http://localhost:5000/api/blog then call readBlog in controller
router
    .get("/", readBlogs)
    .post("/create", createBlogs)
    .patch("/update/:bid", updateBlogs)
    .delete("/delete/:bid", deleteBlogs)

module.exports = router