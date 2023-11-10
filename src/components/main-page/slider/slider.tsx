import { n } from "@/utils/techToUseRef";
import { useState, useRef } from "react";
import styled from "styled-components";

const Conteiner = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.bg};
`;

const BigConteiner = styled.section`
  width: ${(props) => props.theme.length};
  height: 100%;
  display: block;
`;

const SliderConteiner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;
const NextBtn = styled.button`
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 9999px 0 0 9999px;
  border: none;
  width: 40px;
  height: 60px;
  font-size: 18px;
  color: ${(props) => props.theme.colors.blue};
  box-shadow: 0 0 7px ${(props) => props.theme.colors.shadowcolor};
`;
const PrevBtn = styled.button`
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 0 9999px 9999px 0;
  border: none;
  width: 40px;
  height: 60px;
  font-size: 18px;
  color: ${(props) => props.theme.colors.blue};
  box-shadow: 0 0 7px ${(props) => props.theme.colors.shadowcolor};
`;

const Carrossel = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const ImgSliderConteiner = styled.div`
  width: 1120px;
  height: 100%;
  flex: none;
`;
const ImgSlider = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const IdxSliderConteiner = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;
const IdxBall = styled.button`
  width: 11px;
  height: 11px;
  border: 2px solid ${(props) => props.theme.colors.blue};
  border-radius: 9999px;
  cursor: pointer;
  :focus {
    background-color: ${(props) => props.theme.colors.blue};
  }
`;
export default function Slider() {
  const photos = ["img3.jpg", "img1.jpg", "img2.jpg", "img4.jpg"];

  const [slideIdx, setSlideIdx] = useState(0);
  const carrossel = useRef(n)
  
  function handleChangeBtnColor(index: number) {
    let isActive = false;

    if (index === slideIdx) {
      isActive = true;
    }
    let color = { backgroundColor: isActive ? "#1e6fd9" : "white" };
    return color;
  }
  function handlePrevImg() {
    if (slideIdx > 0) {
      carrossel.current.scrollLeft -= carrossel.current.offsetWidth;
      setSlideIdx((prev) => prev - 1);
    } else {
      carrossel.current.scrollLeft = carrossel.current.offsetWidth * photos.length ;
      setSlideIdx(photos.length - 1);
    }
  }
  function handleNextImg() {
    if (slideIdx === photos.length - 1) {
      carrossel.current.scrollLeft = 0
      setSlideIdx(0);
    } else {
      carrossel.current.scrollLeft += carrossel.current.offsetWidth;
      setSlideIdx((prev) => prev + 1);
    }
  }
  function handleChangeImgOnClick(index: number) {
    carrossel.current.scrollLeft = carrossel.current.offsetWidth * index;
    setSlideIdx(index);
  }

  return (
    <Conteiner>
      <BigConteiner>
        <SliderConteiner>
          <PrevBtn onClick={handlePrevImg}>{"<"}</PrevBtn>
          <Carrossel ref={carrossel}>
            {photos.map((item, index) => (
              <ImgSliderConteiner key={index}>
                <ImgSlider src={item} />
              </ImgSliderConteiner>
            ))}
          </Carrossel>
          <NextBtn onClick={handleNextImg}>{">"}</NextBtn>
        </SliderConteiner>

        <IdxSliderConteiner>
          {photos.map((item, index) => (
            <IdxBall
              key={item}
              style={handleChangeBtnColor(index)}
              className={index === slideIdx ? "act" : "dot act"}
              onClick={() => handleChangeImgOnClick(index)}
            ></IdxBall>
          ))}
        </IdxSliderConteiner>
      </BigConteiner>
    </Conteiner>
  );
}
