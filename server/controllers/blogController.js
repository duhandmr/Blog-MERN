const Blog = require("../models/Blog");

const createBlog = async (req, res) => {
  try {
    const newBlog = new Blog({
      title: "Yeni MERN Projesi",
      content: "Bu yazıda yeni bir MERN projesi geliştiriyoruz...",
      author: "Duhan Demir",
      tags: ["mern", "react", "mongodb"],
      isPublished: true,
    });

    await newBlog.save();

    res
      .status(201)
      .json({ message: "Blog başarıyla kaydedildi", blog: newBlog });
  } catch (err) {
    console.error("Blog kayıt hatası:", err);
    res.status(500).json({ message: "Sunucu hatası", error: err.message });
  }
};

const allBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ message: "Bloglar alınamadı", error: err.message });
  }
};

module.exports = { createBlog, allBlogs };
