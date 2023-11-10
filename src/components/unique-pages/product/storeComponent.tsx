import { PropsStore } from "@/types/store";
import Link from "next/link";
import styled from "styled-components";

const StoreConteiner = styled.section`
  width: 90%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items:center;
  font-size: 14px;
  a {
    display: flex;
    text-decoration: none;
    align-items: center;
    gap: 12px;
    color: black;
  }
`;
const StoreImg = styled.img`
  width: 40px;
  height: 40px;
  border: solid 1px black;
  border-radius: 9999px;
  object-fit: contain;
`;

export default function StoreCase(store: PropsStore) {
  return (
    <StoreConteiner>
      <Link href={"/store"}>
        <StoreImg src={store.url_img} />
        <h1>{store.name}</h1>
      </Link>
    </StoreConteiner>
  );
}
