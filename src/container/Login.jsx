import React, { useState } from "react";
import styled from "styled-components";
import { phone } from "../Responsive";
import Navbar from "../components/Navbar";
import { login } from "../redux/apiMethods";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 1px 1px;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.7)
    ),
    url("https://images.pexels.com/photos/4109744/pexels-photo-4109744.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500/")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;

const NavbarContainer = styled.div`
  margin-top: 1px;
  margin-bottom: 550px;
  width: 100%;
  padding: 0px 100px;
  position: absolute;
  display: block;
  height: 300px;
`;

const Wrapper = styled.div`
  width: 35%;
  padding: 20px;
  background-color: #fff;
  ${phone({ width: "80%" })}
`;
const Title = styled.h1`
  font-size: 25px;
  font-weight: 250;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 11px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #4d4949;
  color: #ece2e2;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: #05fd05;
    cursor: not-allowed;
  }
`;
const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <Container>
      <NavbarContainer>
        <Navbar />
      </NavbarContainer>
      <Wrapper>
        <Title> LOGIN ACCOUNT </Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleLogin} disabled={isFetching}>
            LOGIN
          </Button>
          {error && <Error> Login failed... </Error>}
          <Link> Forgot my password </Link>
          <Link> Create account </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};
export default Login;
