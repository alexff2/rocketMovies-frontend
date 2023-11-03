import { Container } from "./style";
import PropTypes from "prop-types";

export default function Input({ icon: Icon, ...rest }) {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input {...rest} />
    </Container>
  );
}

Input.propTypes = {
  icon: PropTypes.any,
};
