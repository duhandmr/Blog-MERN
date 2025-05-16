import { useEffect, useState } from "react";
import { getAllBlogs } from "../services/blogApi";

function Blogs() {
  const token = localStorage.getItem("token");
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getAllBlogs()
      .then((res) => {
        setBlogs(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  if (!token) {
    return <p>Only logged users can see the blogs.</p>;
  }

  return (
    <div className="p-4">
      {blogs.length === 0 ? (
        <p>Henüz blog yok.</p>
      ) : (
        blogs.map((b) => (
          <div
            key={b._id}
            className="mb-4 p-4 border border-gray-300 rounded shadow"
          >
            <h2 className="text-xl font-bold">{b.title}</h2>
            <p>{b.content}</p>
            <p className="text-sm text-gray-600">Yazar: {b.author}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Blogs;
