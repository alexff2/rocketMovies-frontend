import { styled } from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.primaryLight};
  padding: 32px;
  border-radius: 16px;
  cursor: pointer;

  h2 {
    color: #f4ede8;
    font-size: 24px;
    padding: 8px 0;
  }

  p {
    color: ${({ theme }) => theme.COLORS.text3};
    margin: 15px 0;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    font-weight: 400;
    text-align: justify;
    height: 60px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
