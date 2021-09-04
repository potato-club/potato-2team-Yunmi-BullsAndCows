import styled from "styled-components";

type Props = {
  children: React.ReactNode;
  heightSize: number;
  onClick: () => void;
};

const Button = ({ children, onClick, heightSize }: Props) => {
  return (
    <ButtonStyled {...{ children, onClick, heightSize }}>
      {children}
    </ButtonStyled>
  );
};

export default Button;

const ButtonStyled = styled.button<Props>`
  width: auto;
  height: ${(props) => props.heightSize}px;
  margin-top: 24px;
  margin-left: 16px;
  font-size: 16px;
  border: solid 1px black;
  border-radius: 4px;
  background-color: white;
  &:hover {
    transition: 400ms $ease_out;
    border: 2px solid #9897a9;
    background-color: #9897a9;
    color: white;
  }
`;
