import PropTypes from "prop-types";

import Stars from "../Stars";
import Tag from "../Tag";

import { Container, TagsContainer } from "./style";

export default function Movies({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h2>{data.title}</h2>

      <Stars qtdStars={data.stars} />

      <p>{data.description}</p>

      <TagsContainer>
        {data.tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </TagsContainer>
    </Container>
  );
}

Movies.propTypes = {
  data: PropTypes.array,
};
