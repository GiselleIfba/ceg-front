import styled, { keyframes } from "styled-components";

const rotate = keyframes`

  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
    border-top-color: brown;
  }
  100%{
    transform: rotate(360deg);
  }
`;

const Circle = styled.div`
  width: 100%;
  height: 700px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Gray = styled.div`
  border: 7px solid;
  border-color: ${(props) => props.theme.colors.bg};
  border-radius: 9999px;
  width: 80px;
  height: 80px;
`;
//transparent #1e6fd9
const Blue = styled.div`
  border: 7px solid;
  border-color: transparent;
  border-top-color: ${(props) => props.theme.colors.headerBg2};
  border-radius: 9999px;
  width: 80px;
  height: 80px;
  translate: -7px -7px;
  animation: ${rotate} 3s linear infinite;
`;

export default function Load() {
  return (
    <Circle>
      <Gray>
        <Blue></Blue>
      </Gray>
    </Circle>
  );
}
