

"use client";
import { devices } from "@/app/global.style";
import { PropsProduct } from "@/types/product";
import styled from "styled-components";

const Btn = styled.button`
  border: none;
  border-radius: 12px;
  font-weight: bolder;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 65px;
  gap: 14px;
  background-color: #B3D5F2;
  color: ${(props) => props.theme.colors.blue};
  transition: ${(props) => props.theme.transition.transition};
  &:hover {
    background-color: #66B1F2;
  }
  @media ${devices.lg} {
    width: 250px;
  }
`;

export default function FinishBuyBtn(product: PropsProduct | PropsProduct[]) {
 

  return (
    <Btn>
      FINALIZE BUY
    </Btn>
  );
}
