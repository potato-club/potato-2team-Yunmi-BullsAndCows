import { useSelector } from "react-redux";
import styled from "styled-components";

export type rangkingOb = {
  score: number;
  nickName: string;
};
export type data = {
  gamerecordData: string;
  rangkingData: rangkingOb[];
};

const RangkingRecord = () => {
  const state: data = useSelector((e) => e) || null;
  console.log("rangking:", state);

  if (state.rangkingData.length) {
    return (
      <RangkingWrap>
        <RangkingWrapTitle>순위 기록</RangkingWrapTitle>
        {state.rangkingData.map((e) => (
          <>
            <span>
              닉네임: {e.nickName} 점수:{e.score}{" "}
            </span>
            <br />
          </>
        ))}
      </RangkingWrap>
    );
  } else {
    return (
      <RangkingWrap>
        <RangkingWrapTitle>순위 기록</RangkingWrapTitle>
        <br />
        <span>등록된 게임 기록이 존재하지 않습니다.</span>
      </RangkingWrap>
    );
  }
};

export default RangkingRecord;

const RangkingWrap = styled.div`
  border: solid 1px black;
`;

const RangkingWrapTitle = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: bolder;
`;
