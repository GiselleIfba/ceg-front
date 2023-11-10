import { devices } from "@/app/global.style";
import { converterParaReal } from "@/hooks/useConversor";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

const ProductCase = styled.div`
  width: 700px;
  height: 212px;
  font-weight: 600;
  margin: 0 10px 10px 0;
  display: flex;
  transition: ${(props) => props.theme.transition.transition};
  padding-bottom: 10px;
  background-color: ${(props) => props.theme.colors.white};
  &:hover {
    box-shadow: 0 0 14px ${(props) => props.theme.colors.shadowcolor};
  }
  @media ${devices.xl} {
    width: 360px;
  }
  @media ${devices.lg} {
    width: 320px;
  }
  @media ${devices.sm} {
    width: 280px;
  }
`;

const Checked = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InputChecked = styled.input.attrs({ type: "checkbox" })`
  width: 25px;
  height: 25px;
`;

const ProductImgConteiner = styled.div`
  width: 150px;
  height: 100%;
  background-color: #aaa;
`;
const ProductImg = styled.img`
  width: 100%;
  height: 100%;
`;

const ConteinerToAlign = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

const ProductDesc = styled.div`
  width: 100%;
  height: 150px;
  padding-left: 5px;
  h2 {
    font-size: 14px;
    padding-top: 5px;
  }
  h3 {
    color: ${(props) => props.theme.colors.shadowcolor};
    font-size: 11px;
  }
  @media ${devices.sm} {
    height: 55px;
    h2 {
      font-size: 12px;
    }
    h3 {
      font-size: 10px;
    }
    p {
      font-size: 12px;
    }
  }
`;
const PriceAndButton = styled.div`
  width: 100%;
  height: 150px;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: end;
  p {
    font-size: 14px;
  }
  @media ${devices.sm} {
    &p {
      font-size: 12px;
    }
  }
`;
const QuatityCase = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
const QuatityBntLess = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 9999px 0 0 9999px;
  border: none;
  background-color: ${(props) => props.theme.colors.color};
  cursor: pointer;
`;
const QuatityBntMore = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 0 9999px 9999px 0;
  border: none;
  background-color: ${(props) => props.theme.colors.color};
  cursor: pointer;
`;
const RemoveBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 9999px;
  border: none;
  background-color: ${(props) => props.theme.colors.color};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export default function GetProductsCart(cartArray: []) {
  return (
    <>
      {cartArray.map((item: any, index) => (
        <div key={item.id}>
          <ProductCase key={item.id}>
            <Checked>
              <InputChecked
                defaultChecked={item.cheked}
                onChange={() => {
                  if (item.cheked) {
                    item.cheked = false;
                    localStorage.setItem("cartItem", JSON.stringify(cartArray));
                  } else {
                    item.cheked = true;
                    localStorage.setItem("cartItem", JSON.stringify(cartArray));
                  }
                  window.location.reload();
                }}
              />
            </Checked>
            <Link href={`/product?id=${item.id}`}>
              <ProductImgConteiner>
                <ProductImg src={item.url_img}></ProductImg>
              </ProductImgConteiner>
            </Link>
            <ConteinerToAlign>
              <ProductDesc>
                <h2>{item.name}</h2>
                <h3>{item.category}</h3>
              </ProductDesc>
              <PriceAndButton>
                <p>{converterParaReal(item.price_in_cent * item.quatity)}</p>
                <QuatityCase>
                  <QuatityBntLess
                    onClick={() => {
                      if (item.quatity > 1) {
                        console.log("clicou em -");
                        item.quatity = item.quatity - 1;
                        localStorage.setItem(
                          "cartItem",
                          JSON.stringify(cartArray)
                        );
                        window.location.reload();
                      }
                    }}
                  >
                    -
                  </QuatityBntLess>
                  <p>Quantidade: {item.quatity}</p>
                  <QuatityBntMore
                    onClick={() => {
                      console.log("clicou em +");
                      item.quatity = item.quatity + 1;
                      localStorage.setItem(
                        "cartItem",
                        JSON.stringify(cartArray)
                      );
                      window.location.reload();
                    }}
                  >
                    +
                  </QuatityBntMore>
                  <RemoveBtn
                    onClick={() => {
                      cartArray.splice(index, 1);
                      console.log(`remove item: ${item}`);
                      localStorage.setItem(
                        "cartItem",
                        JSON.stringify(cartArray)
                      );
                      window.location.reload();
                    }}
                  >
                    <Image src={"lixeira.svg"} width={25} height={25} alt="" />
                  </RemoveBtn>
                </QuatityCase>
              </PriceAndButton>
            </ConteinerToAlign>
          </ProductCase>
        </div>
      ))}
    </>
  );
}
