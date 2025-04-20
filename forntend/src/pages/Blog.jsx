import { useContext } from "react";
import BlogCard from "../componets/BlogCard";
import { StoreContext } from '../context/StoreContext';
import { Link } from "react-router-dom";

const Blogs = () => {
  const { blogData } = useContext(StoreContext);

  return (
    <div className="bg-gray-900 min-h-screen text-gray-100">
      {/* Hero Section (Optional) */}
      {/* <Hero /> */}

      <div className="container mx-auto px-6 py-16">
        {/* Animated Title */}
        <h1 className="text-5xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 mb-8">
          All Blogs
        </h1>

        <p className="text-lg sm:text-xl text-center text-gray-300 mb-12 max-w-3xl mx-auto">
          Explore our blog section where we dive into diverse topics including tech, lifestyle, wellness, and much more. Whether you're looking for inspiration, tips, or deep dives, this is the place to be. 
        </p>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 px-4 py-8">
          {blogData.map((blog, index) => (
            <div className="relative group" key={index}>
              <BlogCard
                id={blog._id}
                title={blog.title}
                image={blog.image}
                category={blog.category}
                author_name={blog.author.name}
                author_image={blog.author.image}
                date={blog.createdAt}
              />
              {/* Hover Effects */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link
                  to={`/blog/${blog._id}`}
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg transform group-hover:scale-105 transition-transform duration-300"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section (Optional) */}
      {/* <footer className="bg-gray-800 text-center text-gray-400 py-6">
        <p>© 2025 Your Blog. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

export default Blogs;
