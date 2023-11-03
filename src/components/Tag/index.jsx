import PropTypes from "prop-types";

import { Container } from "./style";

export default function Tag({ children }) {
  return <Container>{children}</Container>;
}

Tag.propTypes = {
  children: PropTypes.string,
};
