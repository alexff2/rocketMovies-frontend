import { styled } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 125px 90px auto;
  grid-template-areas:
    "header"
    "title"
    "movies";
`;

export const Title = styled.section`
  grid-area: title;
  padding: 0 200px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 32px;
    font-weight: 500;
  }

  button {
    width: 207px;
  }
`;

export const CardsContainer = styled.div`
  grid-area: movies;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0 200px;
  overflow-y: auto;
`;
