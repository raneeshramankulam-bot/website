import axios from "axios"
import Navbar from "../components/common/Navbar"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"
import "./Shop.css"
import Footer from "../components/common/Footer"

function Shop() {
  const [product, setProduct] = useState([])
  const [filter, setFilter] = useState([])
  const [activeBrand, setActiveBrand] = useState("ALL")
  const [search, setSearch] = useState("")

  const handleBrand = (brand) => {
    setActiveBrand(brand)
  }
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

  useEffect(() => {

    let updatedProducts = product

    if (activeBrand !== "ALL") {
      updatedProducts = updatedProducts.filter(
        (item) => item.brand === activeBrand
      )
    }

    updatedProducts = updatedProducts.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    )

    setFilter(updatedProducts)

  }, [search, activeBrand, product])


  return (
    <>
      <Navbar />
      <div className="page-shop">

        <div className="filter-header">
          <div className="brand-filter">
            {["ALL", "Nike", "Adidas", "Puma", "New Balance"].map((b) => (
              <button
                key={b}
                className={activeBrand === b ? "active" : ""}
                onClick={() => handleBrand(b)}
              >
                {b}
              </button>
            ))}
            <div className="search-box">
              <input
                type="text"
                value={search}
                placeholder="Search products..."
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
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
                <Link to={`/shop/${item.id}`}>View Details</Link>
              </div>
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Shop