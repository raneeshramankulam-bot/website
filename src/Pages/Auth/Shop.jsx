import axios from "axios"
import Navbar from "../../components/Navbar"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"
import "./Shop.css"
function Shop() {
  const [product, setProduct] = useState([])
  const [filter, setFilter] = useState([])
  const [activeBrand, setActiveBrand] = useState("ALL")
  
  useEffect(() => {
    axios.get("http://localhost:3000/products")
      .then((responce) => {
        setProduct(responce.data),
          setFilter(responce.data)
      })
      .catch((err) => {
        console.log(err)
        toast.error("failed")
      })
  }, [])
  function handleBrand(brand) {
    setActiveBrand(brand)
    if (brand === "ALL") {
      setFilter(product)
    } else {
      const filterBrand = product.filter((products) => products.brand === brand)
      setFilter(filterBrand)
    }
  }

  return (
    <>
    <Navbar/>
    <div className="page-shop">
      <div className="brand-filter">
        {["ALL", "Nike", "Adidas", "Puma","New Balance"].map((b) => (
          <button
            key={b}
            className={activeBrand === b ? "active" : ""}
            onClick={() => handleBrand(b)}
          >
            {b}
          </button>
        ))}
      </div>
      <hr />

        <div className="products-container">
        {filter.length > 0 ? (
          filter.map((item) => (
            <div key={item.id} className="product-card">
              <img src={item.image} alt={item.name} width="100" />
              <h3>{item.name}</h3>
              <p className="price">₹{item.price}</p>
              <p>Brand: {item.brand}</p>
              <Link to={`/shop/:productId`}>View Details</Link>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  </>
  )
}

export default Shop