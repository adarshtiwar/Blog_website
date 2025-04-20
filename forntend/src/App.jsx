import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Login from './pages/Login'
import Signup from './pages/Signup'
import SingleBlog from './pages/SingleBlog'
import Dashboard from './pages/Dashboard'
import Navbar from './componets/Navbar'

import './App.css'
import Footer from './componets/Footer'
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/blog/:id" element={<SingleBlog />} />
    </Routes>
    
<Footer/>
<ToastContainer/>
    </>
  )
}

export default App;
