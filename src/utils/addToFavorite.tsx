import styled from "styled-components";

const Btn = styled.button`
  background-color: #F0F0F0;
  border: none;
  border-radius: 12px;
  width: 80px;
  height: 65px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ${(props) => props.theme.transition.transition};
`;
const ImageBtn = styled.img`
  
  width: 30px;
  height: 30px;
`;

export default function AddBtnFavorite() {
    return (
    
        <Btn>
          <ImageBtn src="/heart.svg" />
        </Btn>
        
    );
  }