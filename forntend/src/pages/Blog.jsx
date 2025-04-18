import Hero from "../componets/Hero";
import { useContext } from "react";
import BlogCard from "../componets/BlogCard";
import { StoreContext } from '../context/StoreContext';

const Blogs = () => {
  const { blogData } = useContext(StoreContext); 
  return (
    <div>
      <Hero />
      <h1 className="text-3xl text-center font-bold my-6">All Blogs</h1>
      <p className="text-base px-3 sm:text-lg leading-6 max-w-2xl mx-auto">
      Welcome to our blog section, where we explore the latest trends, insights, and stories across a variety of topics including technology, lifestyle, wellness, and more. Whether you're looking for inspiration, tips, or in-depth analysis, our collection of blogs is designed to inform and engage. Dive in and discover something new today!
      </p>

  
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 py-8">
        {blogData.map((blog, index) => (
          <BlogCard
            key={index}
            id={blog._id}
            title={blog.title}
            image={blog.image}
            category={blog.category}
            author_name={blog.author.name}
            author_image={blog.author.image}
            date={blog.createdAt}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
