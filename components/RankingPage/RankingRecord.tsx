import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../src/store";
import { RankingRecordText } from ".";

const RankingRecord = () => {
  const state = useSelector((e: RootState) => e);
  console.log("ranking:", state);

  if (state.rankingData.length) {
    return (
      <RankingWrap>
        <RankingWrapTitle>순위 기록</RankingWrapTitle>
        {state.rankingData.map((e, index) => (
          <RankingRecordText
            key={index}
            nickName={e.nickName}
            score={e.score}
          />
        ))}
      </RankingWrap>
    );
  } else {
    return (
      <RankingWrap>
        <RankingWrapTitle>순위 기록</RankingWrapTitle>
        <NoneRanking>등록된 순위 기록이 존재하지 않습니다.</NoneRanking>
      </RankingWrap>
    );
  }
};

export default RankingRecord;

const RankingWrap = styled.div`
  border: solid 1px black;
  height: auto;
  width: 380px;
`;

const RankingWrapTitle = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: bolder;
`;

const NoneRanking = styled.div`
  margin: 16px;
  text-align: center;
`;
