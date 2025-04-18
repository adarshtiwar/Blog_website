import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        
        {/* Text Content */}
        <div className="w-full lg:w-1/2 space-y-6 animate-fade-in">
          <h2 className="text-4xl font-extrabold text-gray-800 leading-snug">
            Discover the Story Behind <span className="text-orange-500">MetaBlog</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            At MetaBlog, we're more than just bloggers. We're a community of thinkers, tech lovers, lifestyle enthusiasts, and creatives sharing ideas that spark inspiration and meaningful conversation.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Whether you're exploring our latest tech breakdowns, deep-diving into wellness, or just here to be inspired — MetaBlog delivers thoughtful content with a fresh voice and an eye for design.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Join us on this journey where words meet ideas, and creativity finds a home.
          </p>
          <Link
  to="/blogs"
  className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full shadow-md transition-transform duration-300 hover:scale-105"
>
  Explore Blogs
</Link>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src={assets.about}
            alt="About MetaBlog"
            className="rounded-3xl w-full shadow-xl transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
