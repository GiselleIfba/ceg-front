"use client";
import { devices } from "@/app/global.style";
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
  background-color: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.white};
  transition: ${(props) => props.theme.transition.transition};
  &:hover {
    background-color: ${(props) => props.theme.colors.blackBlue};
  }
  @media ${devices.lg} {
    width: 250px;
  }
`;
const ImageBtn = styled.img`
  width: 30px;
  height: 30px;
`;

export default function AddBtnCart(product: any) {
  function hadleAddToCart() {
    // criando novo array com todos atributos de product e quantidade
    let data = {...product, quatity:1, cheked:true}
    //verificando se ja existe o carrinho
    if (localStorage.hasOwnProperty("cartItem")) {
      // se o carrinho ja existe, é criado um array para assumir o carrinho do localStorage 
      let cartArray = new Array();
      // convertendo o carrinho em Object e atrubuindo ao array anterior
      cartArray = JSON.parse(localStorage.getItem("cartItem") || "[]");
      // procurando index de um possivel item já existente no array, e atribuindo ele a uma variável
      let itemIndex = cartArray.findIndex((item) => item.id === data.id);
      //verificando se o index é correspondente à algun item do array
      if (itemIndex >=0) {
        // se o item exite, aumentamos a quantidade
        console.log(`tit${cartArray[itemIndex].quatity }`);
        cartArray[itemIndex].quatity = cartArray[itemIndex].quatity + 1;
        localStorage.setItem("cartItem", JSON.stringify(cartArray));
      } else {
        //se o item não existe no carrinho, adicionamos normalmente
        cartArray.push(data);
        localStorage.setItem("cartItem", JSON.stringify(cartArray));
      }
      //se o carrinho não existe, criamos e adicionamos o item
    } else {
      localStorage.setItem("cartItem", JSON.stringify([data]));
    }
  }

  return (
    <Btn onClick={hadleAddToCart}>
      <ImageBtn src="/bagForBtn.svg"></ImageBtn>
      ADD TO CART
    </Btn>
  );
}
