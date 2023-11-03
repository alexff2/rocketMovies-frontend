import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";

import Input from "../../components/Input";
import Button from "../../components/Button";
import Link from "../../components/Link";

import { Container, Content, ImgContainer } from "./style";

export default function SignUp() {
  return (
    <Container>
      <Content>
        <h1>RocketMovies</h1>
        <span>Aplicação para acompanhar tudo que assistir.</span>

        <form>
          <h2>Crie sua conta</h2>

          <div>
            <Input icon={FiUser} placeholder="Nome" />
            <Input icon={FiMail} placeholder="E-mail" />
            <Input type="password" icon={FiLock} placeholder="Senha" />
          </div>

          <Button>Cadastrar</Button>
        </form>

        <Link to="/">
          <FiArrowLeft /> Voltar para login
        </Link>
      </Content>

      <ImgContainer></ImgContainer>
    </Container>
  );
}
