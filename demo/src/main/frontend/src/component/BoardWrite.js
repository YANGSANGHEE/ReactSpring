import styled from 'styled-components';
import { useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
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

const BoardWrite = () => {
  const dateSet = new Date();
  const today = dateSet.toLocaleDateString();
  const Navigation = useNavigate();
  const BoardPosting = useCallback(() => {
    let data = {
      Writer: Write.current.value,
      Title: Title.current.value,
      Content: Contents.current.value,
      Date: today,
    };
    alert('등록완료');
    axios
      .post('http://localhost:8077/api/posting', data, {
        headers: {
          'Content-Type': `application/json`,
        },
      })
      .catch((e) => console.log(e));
    Navigation('/');
  }, []);

  // console.log(dateSet.toLocaleDateString);

  const Write = useRef(null);
  const Title = useRef(null);
  const Contents = useRef(null);
  return (
    <>
      <h1 style={{ fontSize: '3rem' }}>게시글 작성 페이지</h1>
      <FormSet>
        <div>
          <input type='text' placeholder='작성자' ref={Write}></input>
          <input type='text' placeholder='제목' ref={Title}></input>
          <textarea placeholder='내용' ref={Contents}></textarea>
        </div>
        <Button style={{ marginTop: '2rem' }} onClick={BoardPosting}>
          완료
        </Button>
      </FormSet>
    </>
  );
};

export default BoardWrite;
