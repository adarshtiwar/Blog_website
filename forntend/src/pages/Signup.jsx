import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import BASE_URL from "../config"; // Importing the base URL for API requests

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    image: null,
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handler for form input changes
  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handler for file input (profile image)
  const fileHandler = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  // Submit handler for form submission
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("password", formData.password);
      data.append("image", formData.image);

      setLoading(true);

      // Send POST request to the backend to create the user
      const res = await axios.post(`${BASE_URL}/user/register`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Check if the response contains success field
      if (res.data.success) {
        toast.success(res.data.message);  // Show success toast message
        setTimeout(() => {
          navigate("/login");  // Redirect to login page after a brief delay
        }, 2000);
      } else {
        toast.error(res.data.message || "Signup failed!");  // Show error toast
      }
    } catch (error) {
      // Handle unexpected errors
      toast.error(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white max-w-md w-full p-8 rounded-2xl shadow-lg border border-purple-200"
      >
        <h1 className="text-2xl font-bold text-center text-purple-700 mb-6">
          Create your account ✨
        </h1>
        <form onSubmit={submitHandler} className="flex flex-col gap-4">
          <input
            onChange={onChangeHandler}
            name="name"
            value={formData.name}
            type="text"
            placeholder="Your name"
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none transition duration-200"
            required
          />
          <input
            onChange={onChangeHandler}
            name="email"
            value={formData.email}
            type="email"
            placeholder="Your email"
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none transition duration-200"
            required
          />
          <input
            onChange={onChangeHandler}
            name="password"
            value={formData.password}
            type="password"
            placeholder="Your password"
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none transition duration-200"
            required
          />
          <input
            onChange={fileHandler}
            accept="image/*"
            type="file"
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none transition duration-200"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>
        <p className="text-center mt-5 text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-600 hover:underline font-medium">
            Login here
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;
