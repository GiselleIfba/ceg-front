"use client";
import {register} from "swiper/element/bundle"
import styled from "styled-components";
import SearchMobile from "@/components/header/searchMobile";
import Slider from "@/components/main-page/slider/slider";
import Products from "@/components/main-page/products/products";
import Categories from './../components/main-page/category/categories';

register();

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Separetor = styled.div`
width: 100%;
height: 20px;
background-color: ${props=>props.theme.colors.bg};
`;
export default function Home() {
 
  return (
    <>
      <main>
        <SearchMobile></SearchMobile>
        <Slider></Slider>
        <Separetor></Separetor>
        <Categories></Categories>
        {Products()}
      </main>
    </>
  );
}
