import React from "react";
import styled from "styled-components";
import { Send } from "@material-ui/icons";
import { phone } from "../Responsive";

const Container = styled.div`
  height: 60vh;
  background-color: #b8b9b5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  margin: 15px;
`;

const Description = styled.div`
  font-size: 22px;
  margin-bottom: 20;
  font-weight: 250;
  ${phone({ textAlign: "center" })}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  justify-content: space-between;
  display: flex;
  background-color: #b8b9b5;
  border-bottom: 1px solid black;
  ${phone({ width: "75px" })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
  background-color: #b8b9b5;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #807d7d;
  color: deepgray;
`;

const Bulletin = () => {
  return (
    <Container>
      <Title>News Bulletin</Title>
      <Description>Get Regular News</Description>
      <InputContainer>
        <Input placeholder="Your Email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Bulletin;
