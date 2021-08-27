import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RangkingRecord } from "../components/RangkingPage";
import { Button } from "../components/common/index";

export type rangkingOb = {
  score: number;
  nickNAme: string;
};
export type data = {
  gamerecordData: string;
  rangkingData: rangkingOb[];
};

const Rangking = () => {
  const router = useRouter();

  const moveMain = () => {
    router.push("/");
  };

  return (
    <Wrapper>
      <Header>
        <Title>RangkingPage</Title>
        <Button onClick={moveMain}>메인페이지로</Button>
      </Header>
      <RangkingRecord />
    </Wrapper>
  );
};
export default Rangking;

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

const Title = styled.div`
  font-size: 72px;
`;
