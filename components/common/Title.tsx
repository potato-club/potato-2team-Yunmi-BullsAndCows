import styled from "styled-components";

type Props = {
  text: string;
};

const Title = ({ text }: Props) => {
  return <TitleText>{text}</TitleText>;
};

export default Title;

const TitleText = styled.div`
  font-size: 72px;
  font-weight: 600;
`;
