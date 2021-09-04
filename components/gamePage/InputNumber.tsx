import styled from "styled-components";
import { Button, Input } from "../common";
import { useRouter } from "next/router";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  concatGameRecord,
  concatRanking,
  insertGameRecord,
} from "../../src/store/index";
import { createNumber } from "../../util/CreateNumber";
import { CheckNumber } from "../../util/CheckNumber";

const InputNumber = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const resultNumber = useRef(createNumber());
  console.log("r", resultNumber);
  const [playCount, setPlayCount] = useState<number>(1);
  const [value, setValue] = useState<string>("");

  const winGame = () => {
    let player: string = prompt("승리하였습니다!\n닉네임: ") || "익명";
    dispatch(insertGameRecord(""));
    dispatch(concatRanking({ score: playCount, nickName: player }));
    router.push("/");
  };

  const setData = () => {
    setPlayCount((prev) => prev + 1);
    const temp = CheckNumber(resultNumber.current, value);
    if (temp.st == 4) {
      winGame();
    } else {
      dispatch(
        concatGameRecord(
          value +
            " - ST: " +
            temp.st +
            "개  B: " +
            temp.b +
            "개  O:" +
            temp.out +
            "개<br>"
        )
      );
    }
    console.log("ssdd");
  };

  const onChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    setValue(e.currentTarget.value);
  };

  return (
    <InputNumberWrap>
      <Input onChange={onChangeHandler} />
      <Button heightSize={32} onClick={setData}>
        확인
      </Button>
    </InputNumberWrap>
  );
};

export default InputNumber;

const InputNumberWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 24px;
`;
