import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from "react-icons/fi";

import Link from "../../components/Link";
import Input from "../../components/Input";
import Button from "../../components/Button";

import { Container, Form, ImgContainer, InputContainer } from "./style";

export default function Profile() {
  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft /> Voltar
        </Link>
      </header>

      <Form>
        <ImgContainer>
          <img src="https://github.com/alexff2.png" />
          <div>
            <FiCamera />
          </div>
        </ImgContainer>

        <InputContainer>
          <Input icon={FiUser} placeholder="Alexandre Santa" />
          <Input icon={FiMail} placeholder="alex@gmail.com" />
          <Input icon={FiLock} placeholder="Senha atual" />
          <Input icon={FiLock} placeholder="Nova senha" />
        </InputContainer>

        <Button type="submit">Salvar</Button>
      </Form>
    </Container>
  );
}
