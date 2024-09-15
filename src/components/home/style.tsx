import styled from "styled-components";

export const HomeContainer = styled.div`
  /* height: 100%; */
  /* max-height: calc(100% - 8vh); */
  padding-top: 4vh;
`

export const ContentArea = styled.div`
  padding-top: 6vh;
  display: grid;
  grid-template-columns: repeat(4, 24.99vw);
  grid-template-rows: 75vh;
  width: 100%;
  /* justify-items: center;
  align-items: center; */
`;

export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const PostColumn = styled.div`
  border: 0.1rem solid white;
  margin: 1vh;
  /* max-height: 15vh; */
  grid-template-columns: 1fr;
  /* padding: 31vh 12vh; */
  /* grid-template-columns: repeat(); */
  /* display: grid; */
  /* justify-content: center;
  align-items: center; */
`;

export const PostTitle = styled.h4`
  grid-row: span 1;
  padding: 5vh;
  text-align: center;
`

export const PostBody = styled.p`
  padding: 3vh;
`

// export const AnnouncementsColumn = styled.div`
//   /* grid-column: span 3; */
//   align-items: self-end;
//   justify-content: end; 
//   border: 0.1rem solid white;
//   padding: 31vh 12vh;
//   position: relative;
//   /* right: 18vw; */
// `;

export const PaginationContainer = styled.div`
  grid-column: span 4;
  text-align: center;
  /* margin-top: 1rem;   */
`;
