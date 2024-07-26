import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #4d4b4b;
  color: #f3ecec;
  font-weight: 450px;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: visible;
  position: relative;
`;

const LabelText = styled.label`
  position: absolute;
  top: 1.5em;
  left: 0;
  pointer-events: none;
  transition: 0.6s;
  align-items: center;
  justify-content: center;
  ${Container}:focus ~ &,
  ${Container}:not(::placeholder-shown) ~ & {
    top: 0;
    left: 0;
    font-size: 13px;
  }
`;

const DisplayScroll = () => {
  return (
    <Container>
      <LabelText>
        Black Friday DEALS! Massive discount PLUS Free Shipping on Orders Over
        $50
      </LabelText>
    </Container>
  );
};

export default DisplayScroll;
