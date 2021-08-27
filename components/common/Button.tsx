import styled from "styled-components";

type Props = {
  children: React.ReactNode;
  onClick: () => void;
};

const Button = ({ children, onClick }: Props) => {
  return <ButtonStyled {...{ children, onClick }}>{children}</ButtonStyled>;
};

export default Button;

const ButtonStyled = styled.button`
  width: auto;
  height: 32px;
  margin: 8px;
`;
