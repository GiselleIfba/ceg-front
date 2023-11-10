import Load from "@/components/loading/loading";
import { converterParaReal } from "@/hooks/useConversor";
import { useProducts } from "@/hooks/useGetProducts";
import { PropsProduct } from "@/types/product";
import Link from "next/link";
import styled from "styled-components";
import { devices } from "@/app/global.style";

const Conteiner = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.bg};
`;
const MainConteiner = styled.div`
  width: ${(props) => props.theme.length};
  height: auto;
`;
const Text = styled.div`
  width: 100%;
  height: 50px;
  font-weight: 600;
  font-size: 20px;
  padding-top: 12px;
`;
const ProductConteiner = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(4, auto);
  justify-content: center;
  gap: 25px;
  margin: 32px 0;
  padding: 15px;

  a {
    text-decoration: none;
    color: black;
    width: 100%;
    height: 100%;
  }

  @media ${devices["2xl"]} {
    grid-template-columns: repeat(3, auto);
  }
  @media ${devices.lg} {
    grid-template-columns: repeat(2, auto);
  }
  @media ${devices.xs} {
    grid-template-columns: repeat(1, auto);
  }
`;

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

export default function Products() {
  const { data, isLoading } = useProducts();
  if (isLoading && data == undefined) {
    return <Load />;
  }
  return (
    <Conteiner>
      <MainConteiner>
        <Text>Produtos</Text>
        <ProductConteiner>
          {data?.products.map((value: PropsProduct) => (
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
        </ProductConteiner>
      </MainConteiner>
    </Conteiner>
  );
}
