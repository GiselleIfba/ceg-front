import { useForm } from "react-hook-form";
import styled from "styled-components";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "@/services/api";
import { useEffect, useState } from "react";
import Profile from './account';
import { useUser } from "@/hooks/useGetUser";

const Conteiner = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  width: 100%;
  height: auto;
  border-radius: 29px;
  background-color: ${(props) => props.theme.colors.white};
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  font-weight: 600;
  width: 100%;
  height: 100px;
  & h1 {
    color: ${(props) => props.theme.colors.white};
    font-size: 22px;
    font-weight: 600;
    text-decoration: underline;
  }
`;
const Form = styled.form`
  width: 600px;
  height: 550px;
  background-color: ${(props) => props.theme.colors.white};
  //box-shadow: 0 0 5px ${(props) => props.theme.colors.shadowcolor};
  border-radius: 29px;
`;

const SubmitCase = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;
const Submit = styled.button.attrs({ type: "submit" })`
  border: none;
  border-radius: 12px;
  font-weight: bolder;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 65px;
  gap: 14px;
  background-color: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.white};
  transition: ${(props) => props.theme.transition.transition};
  &:hover {
    background-color: ${(props) => props.theme.colors.blackBlue};
  }
`;
const ChangePassword = styled.p`
  font-size: 12px;
  font-size: 600;
  color: #b627e5;
`;

const InputConteiner = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  gap: 30px;
`;
const InputCase = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  & p {
    font-size: 14px;
  }
`;
const LabelCase = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  padding-left: 60px;
`;
const Label = styled.label`
  font-size: 16px;
  font-weight: 600;
`;

const EmailInput = styled.input.attrs({ type: "email" })`
  width: 80%;
  height: 65px;
  background-color: ${(props) => props.theme.colors.bg};
  border: none;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  font-size: 14px;
  padding-left: 30px;
`;
const PasswordInput = styled.input.attrs({ type: "password" })`
  width: 80%;
  height: 65px;
  background-color: ${(props) => props.theme.colors.bg};
  border: none;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  font-size: 14px;
  padding-left: 30px;
`;

// right side

const RightSide = styled.section`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 600px;
  background-color: ${(props) => props.theme.colors.green};
  border-radius: 29px;
`;
const Accounts = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-left: 12px;
  color: ${(props) => props.theme.colors.white};
`;
const schema = yup.object({
  email: yup
    .string()
    .email("Insira um email válido")
    .required("Campo obrigatório"),
  password: yup
    .string()
    .min(6, "Mínimo de 6 caracteres")
    .required("Campo obrigatório"),
});

    
export default function SingInForm() {
    const [loged, setLoged] = useState({
      user:{
        id: '',
        img_url: ''
      },
      token:''
    });
    JSON.parse(localStorage.getItem("user") || "[]");
    useEffect(() => {
      if (localStorage.hasOwnProperty("user")) {
        setLoged(JSON.parse(localStorage.getItem("user") || "[]"));
      } 
    }, []);
    
   
    //const {data, isLoading} = useUser(loged.user.id, loged.token)
    

    const { register, handleSubmit, formState } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
    defaultValues: {
      password: "",
      email: "",
    },
  });

  const { errors, isSubmitting } = formState;
  console.log(isSubmitting);
  const handleSubmitData = async (data: any) => {
    console.log(data);
    api.post("http://localhost:3333/login", data).then(function (response) {
      //verificando se ja existe um user
      if (localStorage.hasOwnProperty("user")) {
        console.log("já está logado");
      } else {
        localStorage.setItem("user", JSON.stringify(response.data));
        localStorage.setItem("imgUser", JSON.stringify(response.data.user.url_img));
        window.location.reload();
      }
    });
  };
  
  if (loged.token === '') {
    
  
    return (
      <Conteiner>
        <Form onSubmit={handleSubmit(handleSubmitData)}>
          <Text>Hi, Welcome Back!</Text>
          <InputConteiner>
            <InputCase>
              <LabelCase>
                <Label htmlFor="email">Email</Label>
              </LabelCase>
              <EmailInput {...register("email")} placeholder="email" />
              <p>{errors.email?.message}</p>
            </InputCase>
            <InputCase>
              <LabelCase>
                <Label htmlFor="password">Password</Label>
              </LabelCase>
              <PasswordInput {...register("password")} placeholder="password" />
              <p>{errors.password?.message}</p>
            </InputCase>
          </InputConteiner>
          <SubmitCase>
            <Submit disabled={isSubmitting}>Sing In</Submit>
            <ChangePassword>Esqueceu sua senha? modifique-a</ChangePassword>
          </SubmitCase>
        </Form>
        <RightSide>
          <Text>
            <h1>Contas que você pode usar</h1>
          </Text>
          <Accounts>
            <span>João</span>
            <li>jaoxpg@gmail.com</li>
            <li>senha</li>
            <span>Hanna</span>
            <li>minihanna@gmail.com</li>
            <li>senha</li>
            <span>Alice</span>
            <li>alicinhacastro@gmail.com</li>
            <li>123abc</li>
          </Accounts>
        </RightSide>
      </Conteiner>
    );
    } else {
        return(
            <>{Profile()}</>
        )
    }


}
