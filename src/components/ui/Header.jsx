import styled from "styled-components";

export const Parent = styled.div`
  width: 1140px;
  margin: 0 auto;
`;

export const Header = styled.header`
  width: 1140px;
  display: flex;
  justify-content: space-between; /* chap va o‘ng tomonni ajratadi */
  align-items: center; /* vertikal markazlash */
  padding: 20px 0;
`;

export const Nav = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;

  li a {
    text-decoration: none;
    color: inherit;
    font-size: 25px;
  }
`;

export const Img = styled.img`
  width: 30px;
  height: 30px;
`;
export const Main = styled.div`
  display: flex;
  width: 1140px;
  justify-content: space-between; /* chap va o‘ng tomonni ajratadi */
  align-items: center; /* vertikal markazlash */
  padding: 20px 0;
  div {
    gap: 50px;
    display: flex;
    button {
      height: 30px;
    }
  }
`;
