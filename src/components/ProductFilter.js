import { useState } from "react";
import "./style.css";

const products = [
  { name: "Wireless Headphones", price: 129.99, category: "electronics" },
  { name: "Bluetooth Speaker", price: 89.99, category: "electronics" },
  { name: "Cotton T-Shirt", price: 24.99, category: "clothing" },
  { name: "Denim Jeans", price: 59.99, category: "clothing" },
];

export default function ProductFilter() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? products
      : products.filter((p) => p.category === filter);

  return (
    <div className="container">
      <h2>Product Filter</h2>

      <select onChange={(e) => setFilter(e.target.value)} className="dropdown">
        <option value="all">All Products</option>
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
      </select>

      <div className="grid">
        {filtered.map((p, i) => (
          <div key={i} className="card">
            <h3>{p.name}</h3>
            <p>${p.price.toFixed(2)}</p>
            <span className="tag">{p.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
}