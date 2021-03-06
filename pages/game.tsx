import styled from "styled-components";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { insertGameRecord } from "../src/store/index";
import { InputNumber, GameRecord } from "../components/gamePage";
import { Button } from "../components/common/index";
import Title from "../components/common/Title";

const Game = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const moveMain = () => {
    dispatch(insertGameRecord(""));
    router.push("/");
  };

  return (
    <Wrapper>
      <Header>
        <Title text={"gamepage"} />
        <Button heightSize={56} onClick={moveMain}>
          게임 포기
        </Button>
      </Header>
      <InputNumber />
      <GameRecord />
    </Wrapper>
  );
};
export default Game;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  margin: 24px;
  justify-content: center;
  align-items: center;
`;
