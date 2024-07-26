import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import DisplayScroll from "../components/DisplayScroll";
import Products from "../components/Products";
import Bulletin from "../components/Bulletin";
import Footer from "../components/Footer";
import { phone } from "../Responsive";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${phone({ width: "0px 25px", display: "flex", flexDirection: "column" })}
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${phone({ marginRight: "0px" })}
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${phone({ margin: "11px 0px" })}
`;
const Option = styled.option``;

const ProductArray = () => {
  const location = useLocation();
  const cate = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <Navbar />
      <DisplayScroll />
      <Title>{cate}</Title>
      <FilterContainer>
        <Filter>
          <FilterText> Filter Products: </FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Color</Option>
            <Option>Black</Option>
          </Select>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Size</Option>
            <Option>XS</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText> Sort Products: </FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc. ) </Option>
            <Option value="dsc">Price (dsc. ) </Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cate={cate} filters={filters} sort={sort} />
      <Bulletin />
      <Footer />
    </Container>
  );
};

export default ProductArray;
