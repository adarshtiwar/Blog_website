import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("list");
  const token = localStorage.getItem("token");
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    image: null,
  });
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate(); // Hook to navigate

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fileHandler = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", formData.title);
    data.append("category", formData.category);
    data.append("description", formData.description);
    data.append("image", formData.image);

    try {
      const res = await axios.post("http://localhost:3000/blog/create", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success(res.data.message);
      setFormData({ title: "", category: "", description: "", image: null });
      fetchBlogs(); // Refetch blogs to show the updated list
    } catch (error) {
      toast.error(error.message);
    }
  };

  const fetchBlogs = async () => {
    try {
      const res = await axios.get("http://localhost:3000/blog/all", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setBlogs(res.data.blogs);
    } catch (error) {
      console.log("error", error);
    }
  };

  const removeBlog = async (blogId) => {
    try {
      const res = await axios.delete(
        `http://localhost:3000/blog/delete/${blogId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success(res.data.message);
      navigate("http://localhost:5173/dashboard"); // Redirect to the /blog page after deleting a blog
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-r from-gray-800 to-gray-700 text-white p-6">
        <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>
        <button
          className={`w-full text-left py-2 px-4 mb-2 rounded-lg transition-all duration-300 ease-in-out ${
            activeTab === "post" ? "bg-orange-600" : "bg-gray-600 hover:bg-gray-500"
          }`}
          onClick={() => setActiveTab("post")}
        >
          Post a Blog
        </button>
        <button
          className={`w-full text-left py-2 px-4 rounded-lg transition-all duration-300 ease-in-out ${
            activeTab === "list" ? "bg-orange-600" : "bg-gray-600 hover:bg-gray-500"
          }`}
          onClick={() => setActiveTab("list")}
        >
          List of Blogs
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 p-8">
        {activeTab === "post" ? (
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <h2 className="text-2xl font-semibold mb-4">Post a new blog</h2>
            <form
              onSubmit={submitHandler}
              className="flex flex-col gap-6 w-2/3 mx-auto"
            >
              <input
                name="title"
                value={formData.title}
                onChange={onChangeHandler}
                type="text"
                placeholder="Title"
                className="border border-gray-300 rounded-md p-3 outline-none w-full focus:ring-2 focus:ring-orange-500"
              />
              <input
                name="category"
                value={formData.category}
                onChange={onChangeHandler}
                type="text"
                placeholder="Category"
                className="border border-gray-300 rounded-md p-3 outline-none w-full focus:ring-2 focus:ring-orange-500"
              />
              <textarea
                name="description"
                value={formData.description}
                onChange={onChangeHandler}
                placeholder="Description"
                className="border border-gray-300 rounded-md p-3 outline-none w-full focus:ring-2 focus:ring-orange-500"
              />
              <div>
                <label htmlFor="image" className="text-sm text-gray-700">
                  Choose Image
                </label>
                <input
                  onChange={fileHandler}
                  type="file"
                  accept="image/*"
                  className="border border-gray-300 rounded-md p-3 outline-none w-full mt-2"
                />
              </div>
              <button className="bg-black text-white rounded-full py-3 hover:bg-gray-700 transition duration-300 mt-4">
                Post Blog
              </button>
            </form>
          </div>
        ) : (
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <h2 className="text-2xl font-semibold mb-6">List of Blogs</h2>
            {blogs.length === 0 ? (
              <p className="text-center text-gray-600">No Blogs Available</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs.map((blog) => (
                  <div
                    key={blog._id}
                    className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300"
                  >
                    <Link to={`/blog/${blog._id}`}>
  <img
    src={`http://localhost:3000/image/${blog.image}`}
    alt={blog.title}
    className="w-full h-40 object-cover rounded-lg mb-4 cursor-pointer hover:opacity-90 transition"
  />
</Link>
                    <h3 className="text-lg font-semibold">{blog.title}</h3>
                    <p className="text-sm text-gray-600">{blog.category}</p>
                    <p className="text-sm text-gray-500 mt-2 truncate">
                      {blog.description}
                    </p>
                    <motion.button
                      onClick={() => removeBlog(blog._id)}
                      className="mt-4 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      Delete
                    </motion.button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
