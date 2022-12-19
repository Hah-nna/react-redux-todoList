import styled from "styled-components";

const Footer = () => {
  return <FootBox>Copyright &copy; 2022.12.13</FootBox>;
};

const FootBox = styled.footer`
  height: 5rem;
  width: 100%;
  background-color: #5db4ee;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 0.5rem;
  margin: 1rem 0;
`;

export default Footer;
