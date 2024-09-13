import styled from "styled-components";

export const HomeContainer = styled.div`
  padding-top: 6vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 100%;
  max-height: calc(100vh - 8vh);
  width: 100%;
  justify-items: center;
  align-items: center;
`;

export const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-column: span 1;
`;

export const PostColumn = styled.div`
  grid-column: span 1;
  border: 0.1rem solid white;
  margin: 1vh;
  padding: 6vh;
`;

export const AnnouncementsColumn = styled.div`
  grid-column: span 2;
  align-items: self-end;
  justify-content: end; 
  border: 0.1rem solid white;
  padding: 31vh 12vh;
  position: relative;
  left: 12vw;
`;

export const PaginationContainer = styled.div`
  grid-column: span 4;
  text-align: center;
  margin-top: 1rem;
`;
