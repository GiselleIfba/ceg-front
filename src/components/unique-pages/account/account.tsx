import Load from "@/components/loading/loading";
import { useUser } from "@/hooks/useGetUser";
import styled from "styled-components";

const Conteiner = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  width: 100%;
  height: auto;
  border-radius: 29px;
  background-color: ${(props) => props.theme.colors.white};
`;
const OptionsCase = styled.section`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: auto;
  border-radius: 29px;
`;

const Options = styled.section`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: auto;
  border-radius: 29px;
`;

const ImgCase = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
`;

const Img = styled.img`
  object-fit: contain;
  width: 70px;
  height: 70px;
  border-radius: 9999px;
`;

export default function Profile() {
  function clean(){
    localStorage.removeItem("user");
    localStorage.removeItem("imgUser");
    window.location.reload();
}  return (
    <>
      <h1>the account page is not yet created</h1>
      <h2>Visit later</h2>
      <button onClick={clean}>Diconnect</button>
    </>
  );
  //     console.log(data)
  //     return(
  //         <Conteiner>
  //             <OptionsCase>

  //             </OptionsCase>
  //             <Options>
  //                 <ImgCase>
  //                     <Img src={data?.data.url_img}/>
  //                 </ImgCase>
  //             </Options>
  //         </Conteiner>
  //     )
  // }
}
