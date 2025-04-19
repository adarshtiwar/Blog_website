import React, { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
import BlogCard from './BlogCard';

const LatestBlog = () => {
  const { blogData } = useContext(StoreContext); 

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-center sm:text-left mb-6">
        Latest Blogs
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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

export default LatestBlog;
