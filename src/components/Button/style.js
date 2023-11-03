import { styled } from "styled-components";

export const Container = styled.button`
  width: 100%;
  padding: 16px;
  border: none;
  border-radius: 10px;
  background-color: ${({ theme, $variant }) =>
    $variant === "primary" ? theme.COLORS.primary : theme.COLORS.black};
  color: ${({ theme, $variant }) =>
    $variant === "primary" ? theme.COLORS.background3 : theme.COLORS.primary};
  font-weight: 500;
  cursor: pointer;
`;
