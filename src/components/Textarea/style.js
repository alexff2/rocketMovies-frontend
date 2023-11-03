import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 16px;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.background2};
  border-radius: 10px;

  textarea {
    width: 100%;
    height: ${({ $h }) => ($h ? $h : "auto")};
    background-color: transparent;
    border: none;
    outline: 0;
    resize: none;
    color: ${({ theme }) => theme.COLORS.text2};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.text2};
    }
  }
`;
