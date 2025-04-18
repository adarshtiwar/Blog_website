import { createContext } from "react";
import { blogData } from "../assets/assets";

export const StoreContext = createContext(null);    
const StoreContextProvider = ({ children }) => {
    const contextvlaue = {
       blogData
    };
    return (
        <StoreContext.Provider value={contextvlaue}>
            {children}
        </StoreContext.Provider>
    );
}
export default StoreContextProvider;