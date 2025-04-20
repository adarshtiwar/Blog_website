import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({
  id,
  title,
  category,
  image,
  author_name,
  author_image,
  date,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
      <Link to={`/blog/${id}`}>
        <img
          src={`http://localhost:3000/image/${image}`}
          alt={title}
          className="w-full h-52 object-cover hover:scale-105 transition-transform duration-500"
        />
      </Link>

      <div className="p-4 space-y-2">
        <span className="inline-block bg-orange-100 text-orange-600 text-sm font-medium px-3 py-1 rounded-full">
          {category}
        </span>

        <Link to={`/blog/${id}`}>
          <h2 className="text-xl font-semibold text-gray-800 hover:text-orange-500 transition-colors duration-300">
            {title}
          </h2>
        </Link>

        <div className="flex items-center gap-3 mt-4">
          <img
            src={`http://localhost:3000/image/${author_image}`}
            alt={author_name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-medium text-gray-700">{author_name}</p>
            <p className="text-xs text-gray-500">
            {new Date(date).toLocaleDateString("en-US", {
            month: "long",
            day: "2-digit",
            year: "numeric",
          })}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
