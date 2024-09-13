import styled from "styled-components";

export const HeaderTag = styled.header`
  background-color: transparent;
  border-bottom: 0.1rem solid #ffffff;
  color: white;
  display: flex;
  justify-content: flex-end;
  padding: 1rem 2rem;
  box-sizing: border-box;
  width: 100%;
  height: 8vh;
`;

export const OptionsStyle = styled.ul`
  font-size: 1rem;
  display: flex;
  cursor: pointer;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const OptionStyle = styled.li`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  a {
    color: inherit;
    text-decoration: none;
  }
`;
