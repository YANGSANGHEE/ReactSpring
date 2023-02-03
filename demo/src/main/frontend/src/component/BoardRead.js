import styled from 'styled-components';
import { useState, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Button } from './Common/Button';
import axios from 'axios';

const ReadSet = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > h1 {
    font-size: 3rem;
    text-align: center;
  }
  & > div:nth-child(2) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & > div {
      width: 80%;
      margin-bottom: 3rem;
      border-bottom: 1px solid #b2b2b2;
      & > span {
        font-size: 2rem;
        margin-right: 2rem;
        &:nth-child(1) {
          font-weight: bold;
        }
      }
      & > p {
        font-size: 2rem;
        padding-top: 2rem;
        height: 500px;
      }
    }
  }
  & > div:nth-child(3) {
    width: 50rem;
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
    window.location.reload();
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
      <div>
        <Button onClick={ChangeCon}>수정하기</Button>
        <Button onClick={DeleteCon}>삭제하기</Button>
      </div>
    </ReadSet>
  );
};

export default BoardRead;
