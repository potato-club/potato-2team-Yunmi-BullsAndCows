import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../src/store";
import GameRecordText from "./GameRecordText";

const GameRecord = () => {
  const state = useSelector((e: RootState) => e);
  return (
    <RecordWrap>
      <RecordWrapTitle>결과 기록</RecordWrapTitle>
      {state.gamerecordData.split("<br>").map((e, index) => (
        <GameRecordText key={index} recordString={e} />
      ))}
    </RecordWrap>
  );
};

export default GameRecord;

const RecordWrap = styled.div`
  border: solid 1px black;
  height: auto;
  width: 380px;
`;

const RecordWrapTitle = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: bolder;
`;
