import styled from "styled-components";

const Conteiner = styled.main`
  background-color: ${(props) => props.theme.colors.bg};
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default function Main() {
  return <Conteiner></Conteiner>;
}
