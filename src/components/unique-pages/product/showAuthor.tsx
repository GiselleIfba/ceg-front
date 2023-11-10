import { IUser } from "@/types/user"
import styled from "styled-components"

const Conteiner = styled.div`
display: flex;
align-items: center;
width: 100%;
height: 50px;
gap: 12px;
`

const ImgOtherComments = styled.img`
width: 40px;
height: 40px;
border-radius: 9999px;
border: solid 1px ${props=>props.theme.colors.shadowcolor};
object-fit: contain;
`

export default function ShowAuthor(T:Array<IUser>, autorid:string, stars: number){

    let ShowUser = {
        img: "",
        name: ""
    }
    T.map((user)=>{
      if (user.id === autorid) {
         ShowUser = {
          img: user.url_img,
          name: `${user.first_name}  ${user.last_name}`
        }
        return ShowUser
          
      }
    })

    return(
        <>
        <Conteiner>
            <ImgOtherComments src={ShowUser.img}/>
            <h3>{ShowUser.name}</h3>
            <h4>estrelas:{stars}</h4>
        </Conteiner>
        </>
    )
  }