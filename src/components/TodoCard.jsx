import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/modules/todo";

const TodoCard = ({ item, isActive }) => {
  const dispatch = useDispatch();
  // const todo = useSelector((state) => state.todo);

  const handleDeleteClick = () => {
    //onSubmit이벤트가 가지고 있는 새로고침기능을 막아줌
    dispatch(deleteTodo(item.id));
    // setTodos((prev) => prev.filter((t) => t.id !== item.id));
    // 여기서 말하는 t는 prev(원래 있던 목록)에 있는 거를 말함
    // 지금 내가 선택한 카드의 아이디
  };
  const handleToggleButton = () => {
    dispatch(toggleTodo(item.id));
    // setTodos((prev) =>
    // prev.map((t) => {
    // if (t.id === item.id) {
    //목록에 있는 원래 있던 투두카드 하나의 아이디와 지금 내가 선택한 아이디가 같음
    // return { ...t, isDone: !t.isDone };
    // 객체니까 투두카드 객체를 하나 펼쳐서 거기에 isDone이라는 키 값을 !t.isDone 해준거임
    // } else {
    // return t;
  };
  // }),
  // );
  // };

  return (
    <TodoCardContainer key={item.id}>
      <h5>{item.title}</h5>
      <p>{item.contents}</p>
      <TodoButton onClick={handleToggleButton}>
        {isActive ? "완료" : "취소"}
      </TodoButton>
      <TodoButton onClick={handleDeleteClick}>삭제</TodoButton>
    </TodoCardContainer>
  );
};

const TodoCardContainer = styled.div`
  border: 1px solid skyblue;
  margin: 2rem;
  border-radius: 1rem;
  width: 30%;
  display: block;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
`;

const TodoButton = styled.button`
  border: none;
  margin: 0.5rem;
  padding: 1rem 2rem;
  border-radius: 1rem;
  background-color: #5db4ee;
  color: white;
  font-size: 1rem;
`;
export default TodoCard;
