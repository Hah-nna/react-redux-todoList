import styled from "styled-components";

const Header = ({ children }) => {
  return <HeaderBox>{children}</HeaderBox>;
};

const HeaderBox = styled.header`
  width: 100%;
  height: 4.5rem;
  background-color: #5db4ee;
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  font-weight: bold;
  font-size: 1.5rem;
  border-radius: 0.5rem;
`;

export default Header;
