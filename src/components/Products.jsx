import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { famousProducts } from "../data";
import ProductUnit from "./ProductUnit";

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  background-color: #f3e8e8;
`;

const Products = ({ cate, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cate
            ? `http://localhost:5000/api/products?category=${cate}`
            : "http://localhost:5000/api/products"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cate]);

  useEffect(() => {
    cate &&
      setFilteredProducts(
        products.filter((unit) =>
          Object.entries(filters).every(([key, value]) =>
            unit[key].includes(value)
          )
        )
      );
  }, [products, cate, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {cate
        ? filteredProducts.map((unit) => (
            <ProductUnit unit={unit} key={unit.id} />
          ))
        : products
            .slice(0, 8)
            .map((unit) => <ProductUnit unit={unit} key={unit.id} />)}
    </Container>
  );
};

export default Products;
