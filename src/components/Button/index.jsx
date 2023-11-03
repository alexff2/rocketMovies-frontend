import { Container } from "./style";
import PropTypes from "prop-types";

export default function Button({ children, variant = "primary", ...rest }) {
  return (
    <Container $variant={variant} {...rest}>
      {children}
    </Container>
  );
}

Button.propTypes = {
  children: PropTypes.any,
  variant: PropTypes.string,
};
