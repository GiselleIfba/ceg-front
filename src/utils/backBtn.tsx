import styled from "styled-components";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Btn = styled.button`
  background-color: transparent;
  border: none;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center; 
  &:hover {
   cursor: pointer;
  }
`;

export default function BackBtn() {
  const router = useRouter();
  return (
    <Btn onClick={() => router.back()}>
      <Image src="back-btn.svg" alt="img" width={30} height={30} priority /> Back
    </Btn>
  );
}
