import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 125px 70px 70px auto;
  grid-template-areas:
    "header"
    "btn"
    "title"
    "form";

  div.btnBack {
    grid-area: btn;
    padding: 0 200px;

    display: flex;
    align-items: center;
    justify-content: start;
  }

  h2 {
    grid-area: title;
    padding: 0 200px;

    display: flex;
    align-items: center;
    justify-content: start;

    font-size: 36px;
  }
`;

export const Form = styled.form`
  grid-area: form;
  padding: 0 200px 20px;
  overflow-y: auto;

  div {
    display: flex;
    align-items: center;
    gap: 40px;

    margin: 20px 0;
  }
`;

export const ContainerTags = styled.div`
  background: ${({ theme }) => theme.COLORS.black};
  padding: 0 16px;
`;
