import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import DisplayScroll from "../components/DisplayScroll";
import Bulletin from "../components/Bulletin";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { phone } from "../Responsive";
import { useLocation } from "react-router";
import { publicCall } from "../urlCalls";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 55px;
  display: flex;
  ${phone({ padding: "11px", flexDirection: "column" })}
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 95vh;
  object-fit: cover;
  ${phone({ height: "50vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${phone({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 250;
`;
const Desc = styled.p`
  margin: 25px 0px;
`;
const Price = styled.span`
  font-weight: 150;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 65%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${phone({ width: "100%" })};
`;

const Filter = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;
const FilterColor = styled.div`
  height: 20px;
  width: 20px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${phone({ width: "100%" })}
`;

const AmountContainer = styled.div`
  font-weight: 750;
  display: flex;
  align-items: center;
`;

const Amount = styled.span`
  width: 35px;
  height: 35px;
  border-radius: 10px;
  border: 1px solid darkgrey;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 20px;
  border: 1px solid darkgrey;
  background-color: #fff;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicCall.get("/products/find/" + id);
        setProduct(res.data);
      } catch (err) {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };

  return (
    <Container>
      <Navbar />
      <DisplayScroll />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>$ {product.price}</Price>

          <FilterContainer>
            <Filter>
              <FilterTitle>Color: </FilterTitle>
              {product.color?.map((cl) => (
                <FilterColor color={cl} key={cl} onClick={() => setColor(cl)} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size: </FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((sz) => (
                  <FilterSizeOption key={sz}>{sz}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")} />
            </AmountContainer>
            <Button onClick={handleClick}> ADD TO CART </Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Bulletin />
      <Footer />
    </Container>
  );
};

export default Product;
