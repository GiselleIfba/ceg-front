import styled from "styled-components";
import Logo from "./logo";
import Search from "./search";
import Options from "./options";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 75px;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.headerBg2};
  box-shadow: 0 0 14px ${(props) => props.theme.colors.shadowcolor};
  z-index: 1000;
  gap: 12px;
`;

const NavBarDiv = styled.div`
  width: ${(props) => props.theme.length};
  height: 75px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export default function NavBar() {
  return (
    <Header>
      <NavBarDiv>
        <Logo></Logo>
        <Search></Search>
        <Options></Options>
      </NavBarDiv>
    </Header>
  );
}
