"use client";
import styled from "styled-components";
import BackBtn from "@/utils/backBtn";
import Product from "@/components/unique-pages/product/product";

const Conteiner = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  top: 76px;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.bg};
`;
const MainConteiner = styled.div`
  width: ${(props) => props.theme.length};;
  height: auto;
`;
const BtnCase = styled.div`
  width: 100%;
  height: 30px;
  padding: 15px 0 0 15px;
`;

const ProductConteiner = styled.section`
  width: 100%;
  height: auto;
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function ProductPage({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  return (
    <>
      <Conteiner>
        <MainConteiner>
        <BtnCase>
          <BackBtn />
        </BtnCase>
        <ProductConteiner>{Product(searchParams.id)}</ProductConteiner>
        </MainConteiner>
      </Conteiner>
    </>
  );
}
