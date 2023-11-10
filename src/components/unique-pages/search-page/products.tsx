import { useSearchProducts } from "@/hooks/useSearchProducts";
import styled from "styled-components";
import Link from "next/link";
import { PropsProduct } from "@/types/product";
import { converterParaReal } from "@/hooks/useConversor";
import Load from "@/components/loading/loading";
import { devices } from "@/app/global.style";

const ProductCase = styled.div`
  width: 280px;
  height: 430px;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  transition: ${(props) => props.theme.transition.transition};
  padding-bottom: 50px;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0 0 2px ${(props) => props.theme.colors.shadowcolor};
  &:hover {
    box-shadow: 0 0 7px ${(props) => props.theme.colors.shadowcolor};
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

const ProductImgConteiner = styled.div`
  width: 100%;
  height: 300px;
  background-color: #aaa;
`;
const ProductImg = styled.img`
  width: 100%;
  height: 100%;
`;

const ProductDesc = styled.div`
  width: 100%;
  padding-left: 15px;
  h2 {
    font-size: 14px;
    padding-top: 15px;
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
  }
`;
const PriceAndButton = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 14px;
  }
  @media ${devices.sm} {
    &p {
      font-size: 12px;
    }
  }
`;


export default function ProductsCaseSearch(params:string){
    const {data, isLoading} = useSearchProducts(params);
    console.log(data)
    if (isLoading && data==undefined) {
     return <Load />;
   }
return (
    <>
    {data?.data.map((value: PropsProduct) => (
        <ProductCase key={value.id}>
          <Link href={`/product?id=${value.id}`}>
            <ProductImgConteiner>
              <ProductImg src={value.url_img[0]}></ProductImg>
            </ProductImgConteiner>
          </Link>
          <ProductDesc>
            <h2>{value.name.toUpperCase()}</h2>
            <h3>{value.category.toUpperCase()}</h3>
          </ProductDesc>
          <PriceAndButton>
            <p>{converterParaReal(value.price_in_cent)}</p>
          </PriceAndButton>
        </ProductCase>
      ))}
      </>
)

}