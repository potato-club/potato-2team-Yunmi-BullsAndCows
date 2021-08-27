import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";

export default function Home() {
  const router = useRouter();

  const moveGamePage = () => {
    router.push("/game");
  };
  const moveRangkingPage = () => {
    router.push("/rangking");
  };

  console.log("d");
  return (
    <Wrapper>
      <button onClick={moveGamePage}>게임 시작</button>
      <button onClick={moveRangkingPage}>랭킹확인</button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
`;
