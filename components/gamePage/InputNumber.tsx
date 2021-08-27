import styled from "styled-components";
import { Button, Input } from "../common";
import { useRouter } from "next/router";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  concatGameRecord,
  concatRangking,
  insertGameRecord,
} from "../../src/store/index";
import { createNumber } from "../../util/CreateNumber";

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
    dispatch(concatRangking({ score: playCount, nickName: player }));
    router.push("/");
  };

  const setData = () => {
    setPlayCount((prev) => prev + 1);
    let st = 0;
    let b = 0;
    let out = 4;
    for (let i = 0; i < 4; ++i) {
      for (let j = 0; j < 4; ++j) {
        if (resultNumber.current[i] === value[j]) {
          if (i === j) {
            st += 1;
            out -= 1;
          } else {
            b += 1;
            out -= 1;
          }
        }
      }
    }

    dispatch(
      concatGameRecord(
        value + " - ST: " + st + "개  B: " + b + "개  O:" + out + "개<br>"
      )
    );
    if (st == 4) {
      winGame();
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
      <Button onClick={setData}>버튼</Button>
    </InputNumberWrap>
  );
};

export default InputNumber;

const InputNumberWrap = styled.div`
  display: flex;
  flex-direction: row;
`;
