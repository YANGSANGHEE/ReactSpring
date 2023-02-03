import styled from 'styled-components';
import { useState, useCallback, useRef, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from './Common/Button';
import axios from 'axios';

const FormSet = styled.form`
  width: 900px;
  & > div {
    width: inherit;
    display: flex;
    flex-direction: column;
    & > input[type='text'] {
      width: 80%;
      height: 5rem;
      font-size: 1.5rem;
      margin-bottom: 2rem;
      padding: 1rem;
    }
    & > textarea {
      width: 80%;
      height: 50rem;
      font-size: 1.5rem;
      padding: 1rem;
      resize: none;
    }
  }
`;

const BoardReWrite = () => {
  const [data, setData] = useState();
  const dateSet = new Date();
  const today = dateSet.toLocaleDateString();
  const { boardid } = useParams('');
  const Navigation = useNavigate();

  useEffect(() => {
    axios.post('/api/getboard', { id: boardid }).then((res) => {
      console.log(res);
      setData(res.data);
    });
  }, [boardid]);

  const BoardPosting = useCallback(() => {
    let data = {
      id: boardid,
      Writer: Write.current.value,
      Title: Title.current.value,
      Content: Contents.current.value,
      Date: today,
    };
    alert('수정완료');
    axios
      .post('http://localhost:8077/api/upboard', data, {
        headers: {
          'Content-Type': `application/json`,
        },
      })
      .catch((e) => console.log(e));
    Navigation('/');
  }, []);

  console.log(dateSet.toLocaleDateString);
  const Write = useRef(null);
  const Title = useRef(null);
  const Contents = useRef(null);
  return (
    <>
      <h1 style={{ fontSize: '3rem' }}>게시글 수정 페이지</h1>
      <FormSet>
        <div>
          <input
            type='text'
            placeholder='작성자'
            ref={Write}
            defaultValue={data && data.writer}
          ></input>
          <input
            type='text'
            placeholder='제목'
            ref={Title}
            defaultValue={data && data.title}
          ></input>
          <textarea
            placeholder='내용'
            ref={Contents}
            defaultValue={data && data.con}
          ></textarea>
        </div>
        <Button style={{ marginTop: '2rem' }} onClick={BoardPosting}>
          수정하기
        </Button>
      </FormSet>
    </>
  );
};

export default BoardReWrite;
