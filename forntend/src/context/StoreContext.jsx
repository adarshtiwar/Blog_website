import { createContext, useState, useEffect } from "react";
import axios, { all } from "axios";
import BASE_URL from "../config";

export const StoreContext = createContext(null); 

const StoreContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);
useEffect (() => {
  const allBlogs = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/blog/all`);
if(res.data.success){
  setBlogData(res.data.blogs)
}

      
    } catch (error) {
      console.error("Error fetching blogs:", error);
       
    }
    
  }
  allBlogs()
  
  }, []);

  const loginUser = (user, token) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  };

  const logoutUser = () => {
    setUser(null); 
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  const contextValue = {
    blogData,
    user,
    loginUser,
    logoutUser
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
