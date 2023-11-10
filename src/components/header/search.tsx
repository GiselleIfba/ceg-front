"use client";
import styled from "styled-components";
import { devices, theme } from "@/app/global.style";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";

const DivSearch = styled.div`
  width: 600px;
  height: 50px;
  display: flex;
  @media ${devices.sm} {
    display: none;
  }
`;
const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
`;
const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: transparent;
  border-radius: 24px;
  background-color: ${theme.colors.bg};
  padding-left: 30px;
  outline: 0;
  box-shadow: 0 0 5px ${(props) => props.theme.colors.shadowcolor};
`;

export const ImageInput = styled.img`
  width: 20px;
  height: 20px;
  @media ${devices.sm} {
    translate: -40px 12px;
  }
`;

const Submit = styled.button`
  width: auto;
  height: auto;
  background-color: transparent;
  border: none;
  cursor: pointer;
  translate: -40px 3px;
`;

export default function Search() {
  const router = useRouter();
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = formData.get("text");
    router.push(`/search?value=${data}`);
  }
  return (
    <DivSearch>
      <Form onSubmit={onSubmit}>
        <SearchInput
          type="text"
          name="text"
          placeholder="Search your new style here ..."
        />
        <Submit type="submit">
          <ImageInput src="/lupa.svg"></ImageInput>
        </Submit>
      </Form>
    </DivSearch>
  );
}
