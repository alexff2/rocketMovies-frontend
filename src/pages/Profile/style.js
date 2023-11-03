import styled from "styled-components";

export const Container = styled.div`
  header {
    background-color: ${({ theme }) => theme.COLORS.primaryLight};
    padding: 64px 200px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 340px;
  margin: auto;
`;

export const ImgContainer = styled.div`
  position: relative;

  img {
    border-radius: 50%;
    width: 186px;
    margin-top: -94px;
  }

  > div {
    position: absolute;
    background: ${({ theme }) => theme.COLORS.primary};
    border-radius: 50%;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 32px;
    right: 0;

    svg {
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-top: 64px;
  margin-bottom: 24px;
  width: 100%;

  > :nth-child(2) {
    margin-bottom: 24px;
  }
`;
