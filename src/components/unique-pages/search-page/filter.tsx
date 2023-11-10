import styled from "styled-components"

const FilterConteiner = styled.div`
width: 292px;
height: 870px;
background-color: ${props => props.theme.colors.color};
padding: 15px;

`
const TextConteiner = styled.div`
width: 100%;
height: 50px;
font-weight: 400;
font-size: 18px;
padding-left: 15px;
`
const FilterCaseDad = styled.div`
padding-left: 45px;
`
const H1 = styled.h1`
font-size: 16px;
font-weight: 400;
`
const FilterCase = styled.div`
width: 100%;
height: auto;
display: flex;
gap: 20px;
`
const Filters = styled.input`
width: 20px;
height: 20px;

`
export default function Filter(){

return(
    <FilterConteiner>
      <TextConteiner>Filters</TextConteiner>
      <FilterCaseDad>
        <H1>Price</H1>
        <FilterCase>
        <label htmlFor="childrens">Childrens
        <Filters type="checkbox" name="childrens"></Filters></label>
        </FilterCase>
      </FilterCaseDad>
    </FilterConteiner>
)

}