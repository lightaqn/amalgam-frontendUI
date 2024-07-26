import React from "react";
import styled from "styled-components";
import { categories } from "../data";
import CategoryUnit from "./CategoryUnit";
import { phone } from "../Responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  background-color: #6b6969;
  ${phone({ padding: "0px", flexDirection: "column" })}
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((unit) => (
        <CategoryUnit unit={unit} key={unit.id} />
      ))}
    </Container>
  );
};

export default Categories;
