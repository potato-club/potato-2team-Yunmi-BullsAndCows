import React from "react";
import styled from "styled-components";

type Props = {
  nickName: string;
  score: number;
};

const RankingRecordText = ({ nickName, score }: Props) => {
  return (
    <TextWrapper>
      닉네임: {nickName} 횟수:{score}{" "}
    </TextWrapper>
  );
};

export default RankingRecordText;

const TextWrapper = styled.div`
  text-align: center;
  margin: 4px;
`;
