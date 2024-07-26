import React from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import pic1 from "../asset/pic1.jpg";
import { phone } from "../Responsive";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
  height: 80px;
  background-image: url(${pic1});
  ${phone({ height: "55px" })};
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  /* background-color: grey; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${phone({ padding: "12px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.div`
  font-size: 15px;
  cursor: pointer;
  color: white;
  ${phone({ display: "none" })}
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
  padding: 5px;
`;

const Input = styled.input`
  background-image: url(${pic1});
  opacity: 0.5;
  border: none;
  border-bottom: 1px solid red;
  ${phone({ width: "55px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: row;
`;

const Logo = styled.h1`
  font-weight: bold;
  color: white;
  ${phone({ fontSize: "25px" })};
`;
const Logo2 = styled.span`
  font-weight: bold;
  color: Red;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0 5px;
  padding-left: 10px;
  ${phone({ justifyContent: "center", flex: 2 })};
`;

const MenuItem = styled.div`
  font-size: 15px;
  cursor: pointer;
  display: flex;
  color: white;
  margin-left: 30px;
  ${phone({ fontSize: "13px", marginLeft: "10px" })};
`;

const MenuItem2 = styled.button`
  font-size: 15px;
  cursor: pointer;
  display: flex;
  color: white;
  background-color: red;
  border-radius: 5px;
  border: none;
  font-weight: bold;
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input
              src=""
              alt=""
              placeholder="search"
              style={{ color: "white" }}
            />
            <Search
              style={{
                color: "red",
                fontSize: "15px",
                marginLeft: "5px",
              }}
            />
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Logo>
              the Enigma <Logo2> PROJECT. </Logo2>
            </Logo>
          </Link>
        </Center>
        <Right>
          <Link to="/register" style={{ textDecoration: "none" }}>
            <MenuItem2>REGISTER</MenuItem2>
          </Link>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <MenuItem>LOG IN</MenuItem>
          </Link>
          <Link to="/cart" style={{ textDecoration: "none" }}>
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
