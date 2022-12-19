import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const DetailTodoPages = () => {
  const todos = useSelector((state) => state.todo);
  const params = useParams();
  // 이전 컴포넌트에서 넘어온 파라미터를 조회
  const navigate = useNavigate();
  // 다른 컴포넌트로 이동하기 위한 navigate

  const todo = todos.filter((item) => item.id === params.id);

  return (
    <div>
      <div>
        <h3>상세페이지 </h3>
        <p>{todo.id}</p>
      </div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Back
      </button>
      <div>
        <div>{todo.title}</div>
        <div>{todo.content}</div>
      </div>
    </div>
  );
};

export default DetailTodoPages;
