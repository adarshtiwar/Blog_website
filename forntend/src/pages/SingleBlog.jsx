import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";
import { motion } from "framer-motion";

const SingleBlog = () => {
  const { id } = useParams();
  const { blogData } = useContext(StoreContext);
  const navigate = useNavigate();

  const blog = blogData.find((b) => b._id === id);

  if (!blog) {
    return <p className="text-center mt-10 text-gray-500">Blog not found.</p>;
  }

  const handleBackClick = () => {
    navigate(-1); // Goes back to the previous page
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="rounded-2xl shadow-lg border border-gray-200 p-6 max-w-4xl mx-auto my-10 bg-white"
    >
      <motion.img
        src={`http://localhost:3000/image/${blog.image}`}
        alt={blog.title}
        className="w-full rounded-xl object-cover h-90 mb-8"
        style={{ objectFit: "cover"  , height: "300px" }}
      />

      <div className="flex flex-col lg:flex-row lg:gap-8 mb-6">
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-800">{blog.title}</h1>
          <p className="text-sm text-[#4B6BFB] font-medium bg-[#e9efff] px-3 py-1 rounded-full mt-2 inline-block">
            {blog.category}
          </p>
          <p className="text-gray-600 mt-4 leading-relaxed">{blog.description}</p>
        </div>

        <div className="flex flex-col items-start justify-start mt-4 lg:mt-0 lg:w-1/4">
          <div className="flex items-center gap-3 mb-4">
            <img
              src={`http://localhost:3000/image/${blog.author.image}`}
              alt={blog.author.name}
              className="w-12 h-12 rounded-full object-cover shadow-sm"
            />
            <div>
              <p className="font-semibold text-gray-700">{blog.author.name}</p>
              <p className="text-sm text-gray-500">
                {new Date(blog.createdAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "2-digit",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-500">{blog.author.bio}</p>
        </div>
      </div>

      {/* Back Button */}
      <div className="text-center mt-6">
        <button
          onClick={handleBackClick}
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Back to Blogs
        </button>
      </div>
    </motion.div>
  );
};

export default SingleBlog;
