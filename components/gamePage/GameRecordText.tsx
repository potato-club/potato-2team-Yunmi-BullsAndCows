import React from "react";
import styled from "styled-components";

type Props = {
  recordString: string;
};

const GameRecordText = ({ recordString }: Props) => {
  return <TextWrapper>{recordString}</TextWrapper>;
};
export default GameRecordText;
const TextWrapper = styled.div`
  text-align: center;
  margin: 4px;
`;
