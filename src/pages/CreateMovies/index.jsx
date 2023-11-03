import { FiArrowLeft } from "react-icons/fi";

import Header from "../../components/Header";
import Link from "../../components/Link";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import AddTag from "../../components/AddTag";

import { Container, Form, ContainerTags } from "./style";
import Button from "../../components/Button";

export default function CreateMovies() {
  return (
    <Container>
      <Header />

      <div className="btnBack">
        <Link to="/">
          <FiArrowLeft /> Voltar
        </Link>
      </div>

      <h2>Novo Filme</h2>

      <Form>
        <div>
          <Input placeholder="Titulo" />
          <Input placeholder="Sua nota (de 0 a 5)" />
        </div>

        <Textarea placeholder="Observações" h="227px" />

        <h3>Marcadores</h3>

        <ContainerTags>
          <AddTag active="false" value="React" />
          <AddTag active="true" />
        </ContainerTags>

        <div>
          <Button variant="secondary">Excluir filme</Button>
          <Button>Salvar alterações</Button>
        </div>
      </Form>
    </Container>
  );
}
