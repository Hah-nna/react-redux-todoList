import React from "react";
import TodoInput from "../components/TodoInput";
import TodoItem from "../components/TodoItem";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";

const Home = () => {
  return (
    <MainDiv>
      <Header>TodoList</Header>
      <TodoInput />
      <TodoItem isActive={true} />
      <TodoItem isActive={false} />
      <Footer />
    </MainDiv>
  );
};

const MainDiv = styled.div`
  margin: auto;
  max-width: 1200px;
  min-width: 800px;
`;

export default Home;
