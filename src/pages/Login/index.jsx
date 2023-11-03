import { FiMail, FiLock } from "react-icons/fi";

import Input from "../../components/Input";
import Button from "../../components/Button";
import Link from "../../components/Link";

import { Container, Content, ImgContainer } from "./style";

export default function Login() {
  return (
    <Container>
      <Content>
        <h1>RocketMovies</h1>
        <span>Aplicação para acompanhar tudo que assistir.</span>

        <form>
          <h2>Faça seu login</h2>

          <div>
            <Input icon={FiMail} placeholder="E-mail" />
            <Input type="password" icon={FiLock} placeholder="Senha" />
          </div>

          <Button>Entrar</Button>
        </form>

        <Link to="/register">Criar conta</Link>
      </Content>

      <ImgContainer></ImgContainer>
    </Container>
  );
}
