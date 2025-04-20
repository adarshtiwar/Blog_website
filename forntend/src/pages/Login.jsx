import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { StoreContext } from "../context/StoreContext";
import { motion } from "framer-motion";
import BASE_URL from "../config";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { loginUser } = useContext(StoreContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(`${BASE_URL}/user/login`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.data.success) {
        const { user, token } = res.data;
        loginUser(user, token);
        toast.success(res.data.message);
        navigate("/");
      } else {
        toast.error(res.data.message || "Login failed");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white max-w-md w-full p-8 rounded-2xl shadow-lg border border-orange-200"
      >
        <h1 className="text-2xl font-bold text-center text-orange-700 mb-6">
          Login to your account 🔐
        </h1>
        <form onSubmit={submitHandler} className="flex flex-col gap-4">
          <input
            name="email"
            value={formData.email}
            onChange={onChangeHandler}
            type="email"
            placeholder="Your email"
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none transition duration-200"
            required
          />
          <input
            name="password"
            value={formData.password}
            onChange={onChangeHandler}
            type="password"
            placeholder="Your password"
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none transition duration-200"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
        <p className="text-center mt-5 text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/register" className="text-orange-600 hover:underline font-medium">
            Register here
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
