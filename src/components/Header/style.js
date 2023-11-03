import { styled } from "styled-components";

export const Container = styled.header`
  grid-area: header;
  padding: 30px 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 64px;

  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.background2};
  border-bottom-style: solid;

  h1 {
    font-size: 24px;
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.primary};
  }
`;

export const Profiler = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: end;

    strong {
      font-size: 14px;
      width: 180px;
      text-align: end;
    }

    a {
      text-decoration: none;
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.text2};
    }
  }

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }
`;
