import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todos";
//id를 랜덤하게 생성해주는 라이브러리 임포트
import nextId from "react-id-generator";

function Form() {
  // dispatch 생성
  const dispatch = useDispatch();

  // input으로 들어오는 변환값을 받는 state
  const [todo, setTodo] = useState({
    id: 0,
    title: "",
    body: "",
    isDone: false,
  });

  // onChange 핸들러로 변화 감지
  const onChange = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value, id: nextId() });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // nextId.current += 1;
    // dispatch를 통해 액션을 보낸다. 보내면 액션객체의 payload에 들어간 후 리듀서 실행
    dispatch(addTodo({ ...todo }));
    // console.log(todo);
    setTodo({ id: 0, title: "", body: "", isDone: false }); // input창 초기화~
  };

  return (
    <StForm onSubmit={onSubmit}>
      <StInputGroup>
        <StLabel>제목</StLabel>
        {/* useState의 객체todo의 title(키)를 value로 가져온다 */}
        <StInput
          type="text"
          name="title"
          value={todo.title}
          onChange={onChange}
          required
        />
        <StLabel>내용</StLabel>
        {/* useState의 객체todo의 body(키)를 value로 가져온다 */}
        <StInput
          type="text"
          name="body"
          value={todo.body}
          onChange={onChange}
        />
      </StInputGroup>
      <StButton>추가하기</StButton>
    </StForm>
  );
}

const StForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 70px;

  box-sizing: border-box;
  padding: 25px;
`;

const StInputGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 15px;

  height: 40px;
`;

const StLabel = styled.label`
  font-size: 1.2rem; //최상위 엘리먼트의 font size의 1.2배 크기
`;
const StButton = styled.button`
  border-radius: 20px;
  background-color: #fff;

  width: 120px;
  height: 40px;

  cursor: pointer;

  font-weight: bold;
  font-size: 1.1rem;
  color: #000;
`;

const StInput = styled.input`
  box-sizing: border-box;

  border-radius: 20px;
  border: none;

  width: 200px;
  height: 30px;

  color: black;

  padding-left: 20px;

  /* 첫번째 요소에만 오른쪽 여백 */
  &:first-of-type {
    margin-right: 50px;
  }

  /* 두번째 요소의 크기만 증가 */
  &:nth-of-type(2) {
    width: 300px;
  }
`;

export default Form;
