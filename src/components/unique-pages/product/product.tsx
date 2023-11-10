import Load from "@/components/loading/loading";
import { useProduct } from "@/hooks/useGetProduct";
import styled from "styled-components";
import { devices } from "@/app/global.style";
import { useState, useEffect } from "react";
import ProductPriceComponent from "./priceComponent";
import Comments from "./commentsComponent";


const ProductCase = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: space-around;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0 0 4px ${(props) => props.theme.colors.shadowcolor};
  @media ${devices.sm} {
    display: block;
    justify-content: center;
  }
`;

//lado esquerdo da case, onde contem as imagens e descriçao
const LeftSide = styled.div`
  width: 800px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

//case para mudar a imagem se houver mais de uma
const ChangeImgCase = styled.div`
  width: 90px;
  height: auto;
  display: flex;
  flex-direction: column;
  padding-top: 12px;
  align-items: center;
`;
const ChangeImgBnt = styled.button`
  width: 50px;
  height: 55px;
  margin: 5px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
const ChangeImg = styled.img`
  width: 100%;
  height: 100%;
  border: 1px solid ${(props) => props.theme.colors.shadowcolor};
  border-radius: 8px;
  object-fit: fill;
`;
//conteiner para alinhar as imagens
const ImgsConteiner = styled.div`
  width: 800px;
  height: auto;
  display: flex;
`;
const ProductImgCase = styled.div`
  width: 710px;
  height: auto;
  //background-color: ${(props) => props.theme.colors.shadowcolor};
  margin-top: 12px;
  display: flex;
  justify-content: center;
`;
const ProductImg = styled.img`
  width: 550px;
  height: 780px;
  object-fit: fill;
`;
//case para a descriçao
const DescCase = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  & p {
    text-align: start;
    padding: 20px;
  }
`;



export default function Product(value: string) {
  const { data, isLoading } = useProduct(value);
  const [imgIdx, setImgIdx] = useState(0);

  
  console.log(data)
  if (isLoading && !data) {
    return <Load />;
  }


if (data) {
  return (
    <ProductCase>
      <LeftSide>
        <ImgsConteiner>
          <ChangeImgCase>
            { data?.data.product.url_img.map((item, index) => (
              <ChangeImgBnt key={item}>
                <ChangeImg src={item} onClick={()=>{setImgIdx(index)}}/>
              </ChangeImgBnt>
            ))}
          </ChangeImgCase>
          <ProductImgCase>
            <ProductImg src={data?.data.product.url_img[imgIdx]} />
          </ProductImgCase>
        </ImgsConteiner>
        <DescCase>
          <p>{data?.data.product.desc}</p>
        </DescCase>
            {Comments(data?.data.productComments, data.data.T)}
        
      </LeftSide>

      {/*  lado direito onde esta o preço*/}
      {ProductPriceComponent(data?.data)}
    </ProductCase>
  );
}  
}
