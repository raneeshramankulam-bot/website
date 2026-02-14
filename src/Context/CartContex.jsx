import { createContext, useState, useEffect, useContext, useMemo } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const { authUser } = useAuth()


  useEffect(() => {

    const fetchCart = async () => {

      try {
        if (!authUser) {

          setCart([])
          return
        }
        const res = await axios.get(`http://localhost:3000/cart?userId=${authUser.id}`);
        console.log(res.data)
        setCart(res.data);
      } catch (err) {
        console.error("Error fetching cart", err);
      }
    };
    fetchCart();
  }, [authUser]);

  const addToCart = async (product, size, quantity) => {
    if(!authUser)return

    const existingItem = cart.find(
      (item) => item.productId === product.id && item.size === size
    );

    if (existingItem) {
      const newTotalQty = existingItem.quantity + quantity;

      try {
        await axios.patch(`http://localhost:3000/cart/${existingItem.id}`, {
          quantity: newTotalQty,
        });
        setCart((prev) =>
          prev.map((item) =>
            item.id === existingItem.id ? { ...item, quantity: newTotalQty } : item
          )
        );
      } catch (error) {
        console.error("Patch failed", error);
        throw error;
      }
    } else {
      const newItemData = {
        userId : authUser.id,
        productId: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        size,
        quantity,
      };

      try {
        const res = await axios.post("http://localhost:3000/cart", newItemData);

        setCart((prev) => [...prev, res.data]);
      } catch (error) {
        console.error("Post failed", error);
        throw error;
      }
    }
  };

  
  async function removeFromCart(id) {
    try {
      await axios.delete(`http://localhost:3000/cart/${id}`);
      setCart((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      console.error("Error removing item:", err);
    }
  }

  async function clearCart(){
    try {
      const deleateItem = cart.map((item)=>(
        axios.delete(`http://localhost:3000/cart/${item.id}`)
      ))
      await Promise.all(deleateItem)

      setCart([])
    } catch (error) {
      console.log("error for removing cart",error)
    }
  }
  async function updateQuantity(id, newQty) {
    if (newQty < 1) return;

    try {
      await axios.patch(`http://localhost:3000/cart/${id}`, {
        quantity: newQty
      });
      setCart((prevCart) =>
        prevCart.map((item) => item.id === id ? { ...item, quantity: newQty } : item));
    } catch (err) {
      console.error("Error updating quantity:", err);
    }
  }

 
  const subtotal = useMemo(() => {
    return cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  }, [cart]);


  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity , subtotal , clearCart}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);