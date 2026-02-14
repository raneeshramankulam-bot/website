import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Add.css";

function AddProduct() {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    brand: "",
    name: "",
    category: "",
    price: "",
    sizes: [],
    description: "",
    image: ""
  });

  const Sizes = [6, 7, 8, 9, 10, 11, 12];

  const handilChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };

  const toggleSize = (size) => {
    let newSizes = [...product.sizes];

    if (newSizes.includes(size)) {
      newSizes = newSizes.filter((s) => s !== size);
    } else {
      newSizes.push(size);
    }

    setProduct({
      ...product,
      sizes: newSizes
    });
  };


  const handilSubmit = async (e) => {
    e.preventDefault();

    if (!product.name || !product.price || !product.image) {
      return toast.error("Please fill in all required fields");
    }

    try {
      await axios.post(`http://localhost:3000/products`, product);
      toast.success("Product added successfully!");
      navigate("/adminpanel/products");
    } catch (error) {
      console.log(error);
      toast.error("Failed to add product.");
    }
  };

  return (
    <div className="edit-page">
      <div className="edit-card">
        <h2 className="edit-title">Add New Sneaker</h2>

        <form onSubmit={handilSubmit} className="edit-form">
          <div className="form-group">
            <label className="form-label">Brand</label>
            <input
              className="form-input"
              type="text"
              name="brand"
              placeholder="e.g. Nike"
              value={product.brand}
              onChange={handilChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Name</label>
            <input
              className="form-input"
              type="text"
              name="name"
              placeholder="e.g. Air Jordan 1"
              value={product.name}
              onChange={handilChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Category</label>
            <input
              className="form-input"
              type="text"
              name="category"
              placeholder="e.g. Basketball"
              value={product.category}
              onChange={handilChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Price (₹)</label>
            <input
              className="form-input"
              type="number"
              name="price"
              value={product.price}
              onChange={handilChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Available Sizes</label>
            <div className="sizes-container">
              {Sizes.map((size) => (
                <label key={size} className="size-item">
                  <input
                    type="checkbox"
                    className="size-checkbox"
                    checked={product.sizes.includes(size)}
                    onChange={() => toggleSize(size)}
                  />
                  <span className="size-label">{size}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Description</label>
            <textarea
              className="form-textarea"
              name="description"
              placeholder="Write something about this sneaker..."
              value={product.description}
              onChange={handilChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Image URL</label>
            <input
              className="form-input"
              type="text"
              name="image"
              placeholder="Paste image link here"
              value={product.image}
              onChange={handilChange}
            />
          </div>
          <button type="submit" className="update-btn">
            Add Product to Store
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;