import { devices } from "@/app/global.style";
import { converterParaReal } from "@/hooks/useConversor";
import AddBtnCart from "@/utils/addToCart";
import styled from "styled-components";
import StoreCase from "./storeComponent";
import { PropsProductResponse } from "@/types/propsProductResponse";
import FinishBuyBtn from "@/utils/FinishBuy";

const RightSide = styled.div`
  width: 400px;
  height: 800px;
  display: flex;
  flex-direction: column;
  border: solid 1px ${(props) => props.theme.colors.shadowcolor};
  border-radius: 10px;
  padding: 20px 0 0 15px;
  & i {
    color: ${(props) => props.theme.colors.shadowcolor};
    text-decoration: line-through;
    font-family: ${(props) => props.theme.fontStyle};
  }
  & span {
    font-weight: 200;
    font-size: 50px;
    font-family: ${(props) => props.theme.fontStyle};
    color: ${(props) => props.theme.colors.blackBlue};
  }
  @media ${devices.lg} {
    width: 400px;
  }
  @media ${devices.sm} {
    width: 100%;
  }
`;

const ProductName = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  & h1 {
    font-size: 18px;
  }
`;

const TextConteiner = styled.section`
  width: 100%;
  height: 256px;
  padding-top: 8px;
  p{
    font-size: 14px;
  }
`;
const Text = styled.h2`
  color: #00a650;
  font-size: 46px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
`;

//options case
const OptionsConteiner = styled.section`
  width: 100%;
  height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    font-size: 16px;
  }
`;

const SelectOptions = styled.select`
  width: 40%;
  height: 40px;
`;

const Options = styled.option`
  font-weight: 400;
  font-size: 16px;
`;

const BtnConteiner = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  bottom: 10px;
  display: flex;
  flex-direction: column;
  padding-left: 35px;
  gap: 4px;
`;

export default function ProductPriceComponent(data: PropsProductResponse) {
  return (
    <RightSide>
      <ProductName>
        <h1>{data?.product.name.toUpperCase()}</h1>
      </ProductName>
      <i>R$50,00</i>
      <span>{converterParaReal(data?.product.price_in_cent)}</span>
      {StoreCase(data?.productStore)}
      <TextConteiner>
          <p>Categoria: {data.product.category}/{data.product.subCategory}</p>
        <Text>
          Frete Grátis
        </Text>
      </TextConteiner>
      <OptionsConteiner>
        <h3>Options:</h3>
        <SelectOptions>
          {data?.product.options.map((item) => (
            <Options key={item} value={item}>
              {item}
            </Options>
          ))}
        </SelectOptions>
      </OptionsConteiner>
      <BtnConteiner>
        {FinishBuyBtn(data.product)}
        {AddBtnCart(data.product)}
      </BtnConteiner>
    </RightSide>
  );
}
