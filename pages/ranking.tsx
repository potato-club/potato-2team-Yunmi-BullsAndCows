import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RankingRecord } from "../components/RankingPage";
import { Button } from "../components/common/index";
import Title from "../components/common/Title";

export type RankingOb = {
  score: number;
  nickNAme: string;
};
export type data = {
  gamerecordData: string;
  RankingData: RankingOb[];
};

const Ranking = () => {
  const router = useRouter();

  const moveMain = () => {
    router.push("/");
  };

  return (
    <Wrapper>
      <Header>
        <Title text={"RankingPage"} />
        <Button heightSize={56} onClick={moveMain}>
          메인페이지로
        </Button>
      </Header>
      <RankingRecord />
    </Wrapper>
  );
};
export default Ranking;

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
