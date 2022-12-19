import React, { useState, useRef } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../redux/modules/todo";
import { useDispatch, useSelector } from "react-redux";

/** 컴포넌트 설명 : 투두 메인 페이지에서 제목과 내용을 입력하는 영역 */

const TodoInput = () => {
  const dispatch = useDispatch(); // action을 dispatch할 때 사용하는 훅

  const todo = useSelector((state) => state.todo);
  //useSelector 훅을 리덕스의 스토어에 있는 값에 접근할 때 씀
  // console.log(todo);

  const [titleValue, setTitleValue] = useState("");
  const [contentValue, setContentValue] = useState("");

  const titleRef = useRef(null);
  const contentRef = useRef(null);

  const HandleTitleChange = (event) => {
    setTitleValue(event.target.value);
  };

  const HandleContentsChange = (event) => {
    setContentValue(event.target.value);
  };

  const HandleAddButton = (event) => {
    event.preventDefault();

    if (titleValue === "" && contentValue === "") {
      alert("제목과 내용을 입력해주세요");
      return titleRef.current.focus();
    }

    if (titleValue === "") {
      alert("제목을 입력해주세요");
      return titleRef.current.focus();
    }
    if (contentValue === "") {
      alert("내용을 입력해주세요");
      return contentRef.current.focus();
    }

    const newTodo = {
      title: titleValue,
      contents: contentValue,
      isDone: false,
      id: uuidv4(),
    };

    dispatch(addTodo(newTodo));

    // setTodos((prev) => {
    //   return [...prev, newTodo];
    // });

    setTitleValue("");
    setContentValue("");
  };

  return (
    <TodoInputContainer onSubmit={HandleAddButton}>
      <TodoLabel>
        제목
        <TodoInputBox
          value={titleValue}
          onChange={HandleTitleChange}
          placeholder="제목을 입력해주세요"
          ref={titleRef}
        ></TodoInputBox>
      </TodoLabel>
      <TodoLabel>
        내용
        <TodoInputBox
          value={contentValue}
          onChange={HandleContentsChange}
          placeholder="내용을 입력해주세요"
          ref={contentRef}
        ></TodoInputBox>
      </TodoLabel>
      <TodoButton type="submit">추가하기</TodoButton>
    </TodoInputContainer>
  );
};

const TodoInputContainer = styled.form`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
  text-align: center;
  align-items: center;
`;

const TodoInputBox = styled.input`
  width: 20rem;
  padding: 0.5rem;
  margin: 0 1rem;
  border-radius: 0.5rem;
  border: 1px solid #5db4ee;
`;

const TodoLabel = styled.label`
  font-size: 1.2rem;
  font-weight: bold;
`;

const TodoButton = styled.button`
  border: none;
  background-color: #5db4ee;
  padding: 0.5rem;
  border-radius: 0.5rem;
  color: black;
  font-weight: bold;
`;

export default TodoInput;
