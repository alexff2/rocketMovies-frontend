import { useEffect, useState } from "react";
import { BsFillStarFill, BsStar } from "react-icons/bs";
import PropTypes from "prop-types";

import { Container } from "./style";

export default function Stars({ qtdStars }) {
  const [starsLikes, setStarsLikes] = useState([]);
  const [starsDesLikes, setStarsDesLikes] = useState([]);

  useEffect(() => {
    let stars = qtdStars;
    const arrayLikes = [];
    const arrayDesLikes = [];

    for (let index = 0; index < 5; index++) {
      if (stars > 0) {
        arrayLikes.push("");
        stars--;
      } else {
        arrayDesLikes.push("");
      }
    }

    setStarsLikes(arrayLikes);
    setStarsDesLikes(arrayDesLikes);
  }, [qtdStars]);
  return (
    <Container>
      {starsLikes.length > 0 &&
        starsLikes.map((like, index) => <BsFillStarFill key={index} />)}
      {starsDesLikes.length > 0 &&
        starsDesLikes.map((like, index) => <BsStar key={index} />)}
    </Container>
  );
}

Stars.propTypes = {
  qtdStars: PropTypes.number,
};
