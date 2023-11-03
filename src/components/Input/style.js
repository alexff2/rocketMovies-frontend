import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 16px;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.background2};
  border-radius: 10px;

  svg {
    color: ${({ theme }) => theme.COLORS.text2};
    margin-right: 16px;
  }

  input {
    width: 100%;
    color: ${({ theme }) => theme.COLORS.text2};
    background-color: transparent;
    border: none;
    outline: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.text2};
    }
  }
`;
