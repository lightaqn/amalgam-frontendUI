import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { phone } from "../Responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${phone({ height: "25vh" })};
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 25px;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: #dddbdb;
  color: #584747;
  cursor: pointer;
  font-weight: 600;
`;

const CategoryUnit = ({ unit }) => {
  return (
    <Container>
      <Link to={`/products/${unit.cate}`}>
        <Image src={unit.img} />
        <Info>
          <Title>{unit.title}</Title>
          <Button> SHOP </Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryUnit;
