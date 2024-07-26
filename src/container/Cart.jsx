import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import DisplayScroll from "../components/DisplayScroll";
import Bulletin from "../components/Bulletin";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { phone } from "../Responsive";
import StripeCheckout from "react-stripe-checkout";
import logo2 from "../asset/logo2.jpg";
import { userCall } from "../urlCalls";
import { useSelector } from "react-redux";

const CODE = process.env.REACT_STRIPE_CODE;

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${phone({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "darkgrey" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const TopTextContainer = styled.div`
  ${phone({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${phone({ flexDirection: "column" })};
`;
const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${phone({ flexDirection: "column" })};
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.div``;
const ProductID = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 25px;
  margin: 5px;
  ${phone({ margin: "5px 15px" })};
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${phone({ marginBottom: "25px" })};
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid #fff;
  border-radius: 10px;
  padding: 25px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "550"};
  font-size: ${(props) => props.type === "total" && "25"};
`;

const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 650;
  cursor: "pointer";
  border: "none";
  border-radius: 5;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const history = useHistory();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const submitRequest = async () => {
      try {
        const res = await userCall.post("/checkout/lucre", {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });

        history.push("/nod", { data: res.data });
      } catch {}
    };

    stripeToken && submitRequest();
  }, [stripeToken, cart.total, history]);

  return (
    <Container>
      <Navbar />
      <DisplayScroll />
      <Wrapper>
        <Title> MY SHOPPING BASKET </Title>
        <Top>
          <TopButton> KEEP SHOPPING </TopButton>
          <TopTextContainer>
            <TopText> Shopping Basket (2) </TopText>
            <TopText> Your Wishlist (5) </TopText>
          </TopTextContainer>
          <TopButton type="filled"> CHECKOUT </TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b> Product: </b> {product.title}
                    </ProductName>
                    <ProductID>
                      <b> ID: </b> {product._id}
                    </ProductID>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b> Size: </b> {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>
                    $ {product.price * product.quantity}
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}

            <Hr />
          </Info>

          <Summary>
            <SummaryTitle> ORDER SUMMARY </SummaryTitle>

            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.50</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.50</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="The Enigma Project"
              image={logo2}
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={CODE}
              email="info@enigmaproject.com"
            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Bulletin />
      <Footer />
    </Container>
  );
};

export default Cart;
