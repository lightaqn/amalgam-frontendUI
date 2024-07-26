import React from "react";
import styled from "styled-components";
import {
  Facebook,
  Instagram,
  Twitter,
  YouTube,
  Room,
  Phone,
  MailOutline,
} from "@material-ui/icons";
import { phone } from "../Responsive";
import { Link } from "react-router-dom";
import StripeLogo from "../asset/Stripe-Logo.png";

const Container = styled.div`
  display: flex;
  ${phone({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  padding: 20px;
  ${phone({ display: "none" })}
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;
const ListUnit = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Center = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1`
  flex: 1;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  cursor: pointer;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${phone({ backgroundColor: "#c2bcbc" })}
`;
const ContactUnit = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Title> Connects </Title>
        <List>
          <Link to="/" style={{ textDecoration: "none" }}>
            <ListUnit>Home</ListUnit>
          </Link>
          <Link to="/cart" style={{ textDecoration: "none" }}>
            <ListUnit>Cart</ListUnit>
          </Link>
          <ListUnit>Male Products</ListUnit>
          <ListUnit>Female Products</ListUnit>
          <ListUnit>Accessories</ListUnit>
          <ListUnit>My Account</ListUnit>
          <ListUnit>Order Tracking</ListUnit>
          <ListUnit>Wishlist</ListUnit>
          <ListUnit>Terms & Conditions</ListUnit>
        </List>
      </Left>

      <Center>
        <Logo> the Enigma Project </Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
          temporibus libero, labore dignissimos delectus neque dolores quod
          laboriosam et impedit.
        </Desc>
        <SocialContainer>
          <SocialIcon color="#270896">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="#b91331">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="#15caf7">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="#ff0202">
            <YouTube />
          </SocialIcon>
        </SocialContainer>
      </Center>

      <Right>
        <Title> Contact Us </Title>
        <ContactUnit>
          {" "}
          <Room style={{ marginRight: "10px" }} /> North Pole, Earth{" "}
        </ContactUnit>
        <ContactUnit>
          {" "}
          <Phone style={{ marginRight: "10px" }} /> +1234567890{" "}
        </ContactUnit>
        <ContactUnit>
          {" "}
          <MailOutline style={{ marginRight: "10px" }} />{" "}
          contact@enigmaproject.com{" "}
        </ContactUnit>
        <Payment src={StripeLogo} />
      </Right>
    </Container>
  );
};

export default Footer;
