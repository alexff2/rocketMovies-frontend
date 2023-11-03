import { Link } from "react-router-dom";

import { Container, Profiler } from "./style";
import Input from "../Input";

export default function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>

      <Input />

      <Profiler>
        <div>
          <strong>Alexandre Silva Santos</strong>
          <a href="/">SAIR</a>
        </div>

        <Link to="/profile">
          <img src="https://github.com/alexff2.png" />
        </Link>
      </Profiler>
    </Container>
  );
}
