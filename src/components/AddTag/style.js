import { styled } from "styled-components";

export const Container = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  background-color: ${({ theme, $active }) =>
    $active === "false" ? theme.COLORS.background3 : "transparent"};
  border: dashed 1px
    ${({ theme, $active }) =>
      $active === "true" ? theme.COLORS.text1 : "transparent"};

  font-size: 12px;
  margin-left: 8px;
  border-radius: 8px;
  padding: 16px;

  input {
    width: 100px;
    margin-right: 16px;
    background-color: transparent;
    color: #e5e5e5;
    border: none;
    outline: none;
  }

  button {
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    cursor: pointer;

    svg {
      color: ${({ theme }) => theme.COLORS.primary};
    }
  }
`;
