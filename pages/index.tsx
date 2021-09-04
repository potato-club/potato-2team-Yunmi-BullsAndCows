import { useRouter } from "next/router";
import styled from "styled-components";
import Title from "../components/common/Title";
import { Button } from "../components/common";

export default function Home() {
  const router = useRouter();

  const moveGamePage = () => {
    router.push("/game");
  };
  const moveRankingPage = () => {
    router.push("/ranking");
  };

  return (
    <Wrapper>
      <Title text={"숫자 야구 게임"} />
      <ButtonWrap>
        <Button heightSize={56} onClick={moveGamePage}>
          게임 시작
        </Button>
        <Button heightSize={56} onClick={moveRankingPage}>
          랭킹확인
        </Button>
      </ButtonWrap>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
`;
