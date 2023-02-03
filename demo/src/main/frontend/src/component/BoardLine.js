import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LineSet = styled.div`
  width: inherit;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const BoardLine = ({ No, Title, date, Writer }) => {
  const Navigation = useNavigate();
  return (
    <LineSet
      onClick={() => {
        Navigation(`/read/${No}`);
      }}
    >
      <div>{No}</div>
      <div>{Title}</div>
      <div>{date}</div>
      <div>{Writer}</div>
    </LineSet>
  );
};

export default BoardLine;
