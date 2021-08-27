import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

export type rangkingOb = {
  score: number;
  nickNAme: string;
};
export type data = {
  gamerecordData: string;
  rangkingData: rangkingOb[];
};

const GameRecord = () => {
  const state: data = useSelector((e) => e) || "";
  return (
    <RecordWrap>
      <RecordWrapTitle>결과 기록</RecordWrapTitle>
      {state.gamerecordData.split("<br>").map((e) => (
        <>
          <span>{e}</span>
          <br />
        </>
      ))}
    </RecordWrap>
  );
};

export default GameRecord;

const RecordWrap = styled.div`
  border: solid 1px black;
`;

const RecordWrapTitle = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: bolder;
`;
