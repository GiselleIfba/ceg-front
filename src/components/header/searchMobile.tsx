import styled from "styled-components";
import { devices } from "@/app/global.style";
import { ImageInput } from "./search";

const SearchInputMobile = styled.input`
  height: 100%;
  width: 100%;
  border: transparent;
  border-radius: 24px;
  background-color: ${(props) => props.theme.colors.bg};
  padding-left: 30px;
  outline: 0;
  font-size: 11px;
`;

const DivInputMobile = styled.div`
position: fixed;
background-color: ${(props) => props.theme.colors.white};
  display: none;
  height: 60px;
  width: 100%;
  padding: 8px;
  box-shadow: 0 0 14px ${(props) => props.theme.colors.shadowcolor};
  @media ${devices.sm} {
    display: flex;
  }
`;

export default function SearchMobile() {
  return (
    <DivInputMobile>
      <SearchInputMobile
        type="text"
        placeholder="Search your new style here ..."
      ></SearchInputMobile>
      <ImageInput src="/lupa.svg"></ImageInput>
    </DivInputMobile>
  );
}
