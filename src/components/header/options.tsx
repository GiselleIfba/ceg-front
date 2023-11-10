import  {styled, keyframes } from "styled-components";
import Link from "next/link";

const ping = keyframes`
75%, 100% {
     transform: scale(2);
    opacity: 0;
  }
`;

const DivOptions = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  gap: 32px;
  align-items: center;
  justify-content: end;
`;

const ImageOptions = styled.img`
  width: 28px;
  height: 28px;
`;
const ImageOptionsUser = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 9999px;
`;
const AlignToCart = styled.div`
  width: auto;
  height: auto;
  display: flex;
`;

const CaseForQuatity = styled.div`
  width: 10px;
  height: 10px;
  translate: -9px 1px;
`;
const QuatityInCart = styled.div`
  width: 15px;
  height: 15px;
  background-color: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.white};
  border-radius: 9999px;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const EffectToQuatityInCart = styled.div`
  width: 15px;
  height: 15px;
  background-color: ${(props) => props.theme.colors.blue};
  border-radius: 9999px;
  animation: ${ping} 1s cubic-bezier(0, 0, 0.2, 1) infinite;
  translate: 0px 15px;
`;

export default function Options() {
  let cartArray = JSON.parse(localStorage.getItem("cartItem") || "[]");
  let image = JSON.parse(localStorage.getItem("imgUser") || "null");

  const img =  image || "/user.svg"
  function itemsInCart() {
    if (cartArray.length > 0) {
      return (
        <CaseForQuatity>
          <EffectToQuatityInCart />
          <QuatityInCart>{cartArray.length}</QuatityInCart>
        </CaseForQuatity>
      );
    }
  }
  return (
    <DivOptions>
      <Link href={"/account"}>
        <ImageOptionsUser src={img} />
      </Link>
      <AlignToCart>
        <Link href={"/cart"}>
          <ImageOptions src="/bag.svg" />
        </Link>
        {itemsInCart()}
      </AlignToCart>
    </DivOptions>
  );
}
