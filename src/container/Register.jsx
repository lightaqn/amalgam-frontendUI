import React from "react";
import styled from "styled-components";
import { phone } from "../Responsive";
import Navbar from "../components/Navbar";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.7)
    ),
    url("https://images.pexels.com/photos/2668498/pexels-photo-2668498.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")
      center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;

const NavbarContainer = styled.div`
  margin-top: 1px;
  margin-bottom: 600px;
  width: 100%;
  padding: 0px 100px;
  position: absolute;
  display: block;
  height: 300px;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: #fff;
  ${phone({ width: "80%" })}
`;
const Title = styled.h1`
  font-size: 25px;
  font-weight: 250;
  align-items: center;
  justify-content: center;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 11px;
`;
const TermsAndConditions = styled.span`
  font-size: 13px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #4d4949;
  color: #ece4e4;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <NavbarContainer>
        <Navbar />
      </NavbarContainer>
      <Wrapper>
        <Title> CREATE ACCOUNT </Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="first name" />
          <Input placeholder="last name" />
          <Input placeholder="email" />
          <Input placeholder="password " />
          <Input placeholder="confirm password " />
          <TermsAndConditions>
            {" "}
            By creating an account I consent to the processing of my personal
            data in accordance to the <b> PRIVACY Policy </b>{" "}
          </TermsAndConditions>
          <Button>REGISTER</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};
export default Register;
