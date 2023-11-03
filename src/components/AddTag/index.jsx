import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import { Container } from "./style";

export default function AddTag({ active, onClick, ...rest }) {
  return (
    <Container $active={active}>
      <input
        type="text"
        {...rest}
        readOnly={active === "true" ? false : true}
      />
      <button onClick={onClick}>
        {active === "false" ? <AiOutlineClose /> : <AiOutlinePlus />}
      </button>
    </Container>
  );
}
