import { createContext, useState, useContext } from "react";

export const CartContext = createContext()

export const CartProvider = ({ childern }) => {
    const [cart, setCart] = useState([])

    
}