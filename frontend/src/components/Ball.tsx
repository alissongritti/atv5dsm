import styled from "styled-components";

type BallProps = {
  number: string;
};

const BallWrapper = styled.div`
  background-color: #209869;
  color: #fff;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
  box-shadow: 0 2px 4px ${({ theme }) => theme.text}80;
`;

export function Ball({ number }: BallProps) {
  return <BallWrapper>{number}</BallWrapper>;
}