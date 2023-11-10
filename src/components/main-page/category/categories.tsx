import styled from "styled-components";
import Link from "next/link";
import { useRef } from "react";
import { n } from "@/utils/techToUseRef";

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
  padding: 10px;
`;
const Text = styled.div`
  width: 100%;
  font-weight: 200;
  font-size: 18px;
`;

const ConteinerSlider = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Btn = styled.button`
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 9999px;
  border: none;
  width: 60px;
  height: 60px;
  font-size: 18px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.blue};
  box-shadow: 0 0 7px ${(props) => props.theme.colors.shadowcolor};
`;
const CategoriesConteiner = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  width: 1120px;
  box-shadow: 0 0 2px ${(props) => props.theme.colors.shadowcolor};
  &::-webkit-scrollbar {
    display: none;
  }
`;
const CategoryImgDefault = styled.img`
  width: 48px;
  height: 48px;
`;
const CategoryImgHover = styled.img`
  width: 48px;
  height: 48px;
  display: none;
`;
const CategoryCase = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 2px ${(props) => props.theme.colors.shadowcolor};
  flex: none;
  background-color: ${(props) => props.theme.colors.white};
  transition: ${(props) => props.theme.transition.transition};
  &:hover {
    background-color: ${(props) => props.theme.colors.blue};
    color: ${(props) => props.theme.colors.white};
    ${CategoryImgDefault} {
      display: none;
    }
    ${CategoryImgHover} {
      display: flex;
    }
  }
`;

const CategoryTitle = styled.p`
  font-weight: 400;
  font-size: 14px;
`;

export default function Categories() {
  const CategoriesArray = [
    {
      title: "Esporte",
      img: "ball-category.svg",
      imgHover: "ball-categoryHover.svg",
    },
    {
      title: "Moda",
      img: "roupas-category.svg",
      imgHover: "roupas-categoryHover.svg",
    },
    {
      title: "Informática",
      img: "informatica-category.svg",
      imgHover: "informatica-categoryHover.svg",
    },
    {
      title: "Celulares",
      img: "phone-category.svg",
      imgHover: "phone-categoryHover.svg",
    },
    {
      title: "Bebidas",
      img: "bebidas-category.svg",
      imgHover: "bebidas-categoryHover.svg",
    },
    {
      title: "Eletrodomésticos",
      img: "eletrodomestico-category.svg",
      imgHover: "eletrodomestico-categoryHover.svg",
    },
    {
      title: "Ferramentas",
      img: "ferramentas-category.svg",
      imgHover: "ferramentas-categoryHover.svg",
    },
    {
      title: "Brinquedos",
      img: "toy-category.svg",
      imgHover: "toy-categoryHover.svg",
    },
    {
      title: "Automóveis",
      img: "volante-category.svg",
      imgHover: "volante-categoryHover.svg",
    },
    
    
  ];

  const category = useRef(n);

  return (
    <Conteiner>
      <MainConteiner>
        <Text> Categorias Populares </Text>
        <ConteinerSlider>
          <Btn
            onClick={() => {
              category.current.scrollLeft = category.current.scrollLeft -=
                category.current.offsetWidth;
            }}
          >
            {"<"}
          </Btn>
          <CategoriesConteiner ref={category}>
            {CategoriesArray.map((category) => (
              <CategoryCase key={category.title}>
                <Link href={`category?value=${category.title}`}>
                  <CategoryImgDefault src={category.img} />
                  <CategoryImgHover src={category.imgHover} />
                </Link>
                <CategoryTitle>{category.title}</CategoryTitle>
              </CategoryCase>
            ))}
          </CategoriesConteiner>
          <Btn
            onClick={() => {
              category.current.scrollLeft = category.current.scrollLeft +=
                category.current.offsetWidth;
            }}
          >
            {">"}
          </Btn>
        </ConteinerSlider>
      </MainConteiner>
    </Conteiner>
  );
}
