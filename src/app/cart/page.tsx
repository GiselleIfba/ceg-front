"use client";
import BackBtn from "@/utils/backBtn";
import styled from "styled-components";
import ValuesCart from "@/components/unique-pages/cart/valueCart";
import GetProductsCart from "@/components/unique-pages/cart/getProducts";

const Conteiner = styled.div`
  width: 100%;
  height: auto;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.bg};
`;
const MainConteiner = styled.div`
  width: ${(props) => props.theme.length};
  height: auto;
  display: block;
`;
const BacBtnCase = styled.div`
  width: 100%;
  height: 30px;
  margin-bottom: 7px;
`;

const MidConteiner = styled.div`
  display: flex;
  width: 100%;
  height: auto;
`;

// conteiner de produtos
const ProductConteiner = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: 795px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default function Cart() {
  //pega os itens do localStorage e converte em Object, tornando-se o carrinho
  let cartArray = JSON.parse(localStorage.getItem("cartItem") || "[]");
  console.log(cartArray);
  return (
    <main>
      <Conteiner>
        <MainConteiner>
          <BacBtnCase>
            <BackBtn />
          </BacBtnCase>
          <MidConteiner>
            <ProductConteiner>{GetProductsCart(cartArray)}</ProductConteiner>
            {ValuesCart(cartArray)}
          </MidConteiner>
        </MainConteiner>
      </Conteiner>
    </main>
  );
}
