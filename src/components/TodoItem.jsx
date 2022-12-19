import React from "react-redux";
import styled from "styled-components";
import TodoCard from "./TodoCard";
import { useSelector } from "react-redux";

const TodoItem = ({ isActive }) => {
  const todos = useSelector((state) => state.todo);
  return (
    <>
      <TodoItemBox>{isActive ? "Work🔥" : "Done❤️"}</TodoItemBox>
      {todos
        .filter((item) => item.isDone === !isActive)
        .map((item) => {
          return (
            <TodoCard key={item.id} item={item} isActive={isActive}></TodoCard>
          );
        })}
    </>
  );
};

const TodoItemBox = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  padding: 1rem;
  box-shadow: inset 0 -11px 0 pink;
  line-height: 21px;
`;

export default TodoItem;
