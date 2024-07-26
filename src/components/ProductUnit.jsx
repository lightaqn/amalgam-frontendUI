import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { famousProducts } from "../data";
import {
  ShoppingCartOutlined,
  Search,
  FavoriteBorder,
} from "@material-ui/icons";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;
const Container = styled.div`
  display: flex;
  margin: 5;
  height: 340;
  min-width: 270;
  align-items: center;
  justify-content: center;
  background-color: #e0dede;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
`;
const Circle = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background-color: #a6ad65;
  position: absolute;
`;
const Image = styled.img`
  height: 65%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #a8f7f3;
    transform: scale(1.2);
  }
`;

const ProductUnit = ({ unit }) => {
  return (
    <Container>
      <Circle />
      <Image src={unit.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Link to={`/product/${unit._id}`}>
            <Search />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorder />
        </Icon>
      </Info>
    </Container>
  );
};

export default ProductUnit;
