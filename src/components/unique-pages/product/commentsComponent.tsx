import { IComments } from "@/types/comments";
import { IUser } from "@/types/user";
import styled from "styled-components";
import ShowAuthor from "./showAuthor";

// conteiner para comentários
const CommentsConteiner = styled.section`
  width: 100%;
  height: auto;
`;
const YouComment = styled.div`
  width: 100%;
  height: auto;
  box-shadow: 0 0 2px ${(props) => props.theme.colors.shadowcolor};
`;
const Stars = styled.section`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 10px;
  color: ${(props) => props.theme.colors.blue};
  font-weight: 600;
  font-size: 20px;
`;
const MyCommenter = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const TopCase = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
`;
const MyAccount = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
const MyaccountImg = styled.img`
width: 40px;
height: 40px;
border-radius: 9999px;
border: solid 1px ${props=>props.theme.colors.shadowcolor};
object-fit: contain;
`

const SetStars = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const CaseToAlignForm = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const InputCommenter = styled.input.attrs({ type: "text" })`
  width: 100%;
  height: 220px;
  display: flex;
  border-radius: 19px;
  border: 2px solid ${(props) => props.theme.colors.blackBlue};
  outline: 0;
`;
const Submit = styled.input.attrs({ type: "submit" })`
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 12px;
  font-weight: bolder;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  background-color: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.white};
  transition: ${(props) => props.theme.transition.transition};
  &:hover {
    background-color: ${(props) => props.theme.colors.blackBlue};
  }
`;

const OtherComments = styled.div`
  width: 100%;
  height: auto;
`;
const OtherCommentsCase = styled.div`
  width: 100%;
  height: auto;
  padding: 8px;
  box-shadow: 0 0 2px ${(props) => props.theme.colors.shadowcolor};
`;

export default function Comments(comments: Array<IComments>, T:Array<IUser>) {

 console.log("T", T)

  let totalStars = 0
  comments.map((comment)=>{
    totalStars = comment.stars + totalStars
  })
  const totalReviews = 0.0 | totalStars / comments.length;

  let User = JSON.parse(localStorage.getItem("User") || "[]");
  let url_img = 'user.svg';
  let user_name = ''

  if(User!=="[]"){
      console.log('tá indo',totalStars, comments.length)
  }

  
  return (
    <CommentsConteiner>
      <YouComment>
        <Stars>Média de Avaliações: {totalReviews}</Stars>
        <MyCommenter>
          <TopCase>
            <MyAccount>
              <MyaccountImg src={url_img}></MyaccountImg>
              {user_name}
            </MyAccount>
            <SetStars>setar stars</SetStars>
          </TopCase>
          <CaseToAlignForm>
            <Form>
              <InputCommenter />
              <Submit />
            </Form>
          </CaseToAlignForm>
        </MyCommenter>
      </YouComment>
      <OtherComments>
        {comments?.map((comment) => (
          <OtherCommentsCase key={comment.id}>
            {ShowAuthor(T, comment.authorId, comment.stars)}
            {comment.title}
          </OtherCommentsCase>
        ))}
      </OtherComments>
  
    </CommentsConteiner>
  );
}
