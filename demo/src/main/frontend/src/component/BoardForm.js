import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button } from './Common/Button';
import BoardLine from './BoardLine';

const BoardSet = styled.div`
  width: 900px;
  & > div {
    width: 100%;
    & > div {
      width: 100%;
      height: 30px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      & > div {
        font-size: 2rem;
        text-align: center;
        border: 1px solid black;
      }
    }
  }
`;

const BoardForm = () => {
  const [data, setData] = useState();
  const Navigation = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8077/api/board').then((res) => {
      let arr = res.data;
      console.log(arr);
      setData(arr);
    });
  }, []);

  console.log(data);
  //Dummy Data 자리잡기용
  const formTitle = ['NO', '제목', '일자', '작성자'];
  return (
    <>
      <h1 style={{ fontSize: '3rem' }}>Spring CRUD</h1>
      <BoardSet>
        <div>
          <div>
            {formTitle.map((value, index) => {
              return <div key={index}>{value}</div>;
            })}
          </div>
          {data &&
            data.map((value, index) => {
              return (
                <BoardLine
                  key={index}
                  No={value.id}
                  Title={value.title}
                  date={value.date}
                  Writer={value.writer}
                ></BoardLine>
              );
            })}
        </div>
        <Button
          style={{ marginTop: '2rem' }}
          onClick={() => {
            Navigation('/write');
          }}
        >
          글쓰기
        </Button>
      </BoardSet>
    </>
  );
};

export default BoardForm;
