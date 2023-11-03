import { Container } from "./style";

export default function Textarea({ h = "100px", ...rest }) {
  return (
    <Container $h={h}>
      <textarea {...rest}></textarea>
    </Container>
  );
}
