import { converterParaReal } from "@/hooks/useConversor";
import FinishBuyBtn from "@/utils/FinishBuy";
import styled from "styled-components";

const PaymentConteiner = styled.div`
  width: 490px;
  height: 500px;
  display: block;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};
  padding: 20px;
`;
const Text = styled.div`
  width: 100%;
  height: 50px;
  font-size: 12px;
`;
const Section = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: end;
  padding-top: 10px;
  h1 {
    font-size: 18px;
  }
`;

const AlignBtn = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PayBnt = styled.button`
  width: 80%;
  height: 50px;
  border: none;
  border-radius: 12px;
  font-weight: bolder;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  background-color: ${(props) => props.theme.colors.blackBlue};
  color: ${(props) => props.theme.colors.white};
  transition: ${(props) => props.theme.transition.transition};
  &:hover {
    background-color: ${(props) => props.theme.colors.blue};
  }
`;

export default function ValuesCart(cartArray: []) {

    // função para pegar o valor total do carrinho
  function getTotalValue() {
    let index: number = 0;
    let totalValue: number[] = [];
    let finalValue: number = 0;
    cartArray.map((item: any) => {
      //checando se o item está marcado
      if (item.cheked) {
        // se o item estiver marcado, adicionamos à compra final
        totalValue[index] = item.price_in_cent * item.quatity;
        finalValue = totalValue[index] + finalValue;
      }
      index++;
    });
    return converterParaReal(finalValue);
  }
  
  return (
    <PaymentConteiner>
        <Text>
          <h1>Resumo do Pedido</h1>
        </Text>
        <Section>
          <h1>Total</h1>
          <p>{getTotalValue()}</p>
        </Section>
        <AlignBtn>
          {FinishBuyBtn(cartArray)}
        </AlignBtn>
    </PaymentConteiner>
  );
}
