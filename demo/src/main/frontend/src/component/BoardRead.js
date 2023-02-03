import styled from 'styled-components';
import { useState, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Button } from './Common/Button';
import axios from 'axios';

const ReadSet = styled.div`
  width: 900px;
  & > h1 {
    font-size: 3rem;
  }
  & > div {
    & > div {
      margin-bottom: 2rem;
      border-bottom: 1px solid black;
      & > span {
        font-size: 2rem;
        margin-right: 2rem;
        &:nth-child(1) {
          font-weight: bold;
        }
      }
      & > p {
        font-size: 2rem;
      }
    }
  }
  & > div:nth-child(3) {
    width: 250px;
    display: flex;
    justify-content: space-between;
  }
`;

const BoardRead = () => {
  const Navigation = useNavigate();
  const [data, Setdata] = useState();
  const { boardid } = useParams('');

  useEffect(() => {
    axios.post('/api/getboard', { id: boardid }).then((res) => {
      console.log(res);
      Setdata(res.data);
    });
  }, [boardid]);

  const DeleteCon = useCallback(() => {
    alert('삭제 완료!');
    axios.post('/api/delboard', { id: boardid }).catch((e) => {
      console.log(e);
    });
    Navigation('/');
  });
  const ChangeCon = () => {
    Navigation(`/Rewrite/${data.id}`);
  };

  return (
    <ReadSet>
      <h1>게시글 읽기</h1>
      <div>
        <div>
          <span>작성자</span>
          <span>{data && data.writer}</span>
        </div>
        <div>
          <span>제목</span>
          <span>{data && data.title}</span>
        </div>
        <div>
          <span>일시</span>
          <span>{data && data.date}</span>
        </div>
        <div>
          <span>내용</span>
          <p>{data && data.con}</p>
        </div>
      </div>
      <div className='btnWrap'>
        <Button onClick={ChangeCon}>수정하기</Button>
        <Button onClick={DeleteCon}>삭제하기</Button>
      </div>
    </ReadSet>
  );
};

export default BoardRead;
