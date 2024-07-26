import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { sliderUnits } from "../data";
import { phone } from "../Responsive";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  background-color: #726e6e;
  position: relative;
  overflow: hidden;
  ${phone({ display: "none" })}
`;

const Arrow = styled.div`
  height: 50px;
  width: 50px;
  background-color: #d3d3d3;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  margin-top: 5px;
`;

const Slide = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #${(props) => props.Imgbg};
  opacity: 0.9;
`;

const ImageBay = styled.div`
  flex: 1;
  height: 100%;
  width: 100%;
`;

const Image = styled.img`
  height: 95%;
  width: 60vw;
`;

const InfoBay = styled.div`
  flex: 1;
  padding: 50px;
  color: #fff;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 4px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  color: #fff;
  border: 1px solid #fff;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(null);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : slideIndex + 1);
    } else {
      setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderUnits.map((unit) => (
          <Slide Imgbg={unit.ImgBg} key={unit.id}>
            <ImageBay>
              <Image src={unit.img} />
            </ImageBay>
            <InfoBay>
              <Title>{unit.title}</Title>
              <Desc>{unit.desc}</Desc>
              <Button>SHOP</Button>
            </InfoBay>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
