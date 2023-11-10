"use client";
import Profile from "@/components/unique-pages/account/account";
import SingInForm from "@/components/unique-pages/account/formToSingIn";
import BackBtn from "@/utils/backBtn";
import { useEffect, useState } from "react";
import { styled } from "styled-components";

const Conteiner = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`;
const MainConteiner = styled.div`
  width: ${(props) => props.theme.length};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;
const BtnCase = styled.div`
  width: 100%;
  height: 30px;
`;

export default function Account() {
  
 
    return (
      <>
        <main>
          <Conteiner>
            <MainConteiner>
              <BtnCase>
                <BackBtn />
              </BtnCase>
              {SingInForm()}
            </MainConteiner>
          </Conteiner>
        </main>
      </>
    );
  

   
}
