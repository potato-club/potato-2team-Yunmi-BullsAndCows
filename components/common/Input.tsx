import styled from "styled-components";

type Props = {
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
};

const Input = ({ onChange }: Props) => {
  return <InputStyled {...{ onChange }}></InputStyled>;
};

export default Input;

const InputStyled = styled.input`
  margin-top: 24px;
  font-size: 24px;
  height: 32px;
`;
