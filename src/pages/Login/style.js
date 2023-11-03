import { styled } from "styled-components";
import ImgLogin from "../../assets/imgLogin.png";

export const Container = styled.div`
  height: 100vh;
  display: flex;
`;

export const Content = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 48px;
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.primary};
    margin-bottom: 4px;
  }

  form {
    width: 340px;
    text-align: center;

    h2 {
      margin: 48px 0;
    }

    > div {
      display: flex;
      flex-direction: column;
      gap: 8px;

      margin-bottom: 24px;
    }

    button {
      margin-bottom: 42px;
    }
  }
`;

export const ImgContainer = styled.div`
  flex: 1;
  background: url(${ImgLogin}) no-repeat 100% 100%;
`;
