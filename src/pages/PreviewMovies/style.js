import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 125px 70px 210px auto;
  grid-template-areas:
    "header"
    "btn"
    "hContent"
    "description";

  div.btnBack {
    grid-area: btn;
    padding: 0 200px;

    display: flex;
    align-items: center;
    justify-content: start;
  }
`;

export const HeaderContent = styled.div`
  grid-area: hContent;
  padding: 0 200px;

  > div {
    display: flex;
    align-items: center;
    height: 70px;
    gap: 8px;

    h2 {
      font-size: 36px;
      margin-right: 12px;
    }

    img {
      width: 20px;
      border-radius: 50%;
    }

    span {
      display: flex;
      align-items: center;
      margin-right: 12px;
      svg {
        color: ${({ theme }) => theme.COLORS.primary};
        margin-right: 8px;
      }
    }
  }
`;

export const Description = styled.div`
  grid-area: description;
  padding: 0 200px;
  text-align: justify;
  overflow-y: auto;
`;
