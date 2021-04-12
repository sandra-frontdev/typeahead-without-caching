import React, { useState, useEffect } from "react";

import css from "./Home.module.scss";

// Components imports
import Form from "../../components/common/Form/Form";
import { getFruits } from "../../api/FruitsAPI.js";

// Material ui components imports
import { Container, Typography } from "@material-ui/core";

const Home = ({ items }) => {
  const [fruits, setFruits] = useState(null);

  useEffect(() => {
    const renderFruitNames = async () => {
      try {
        if (fruits === null) {
          setFruits(await getFruits());
        }
      } catch (error) {
        console.log("no fruits", error);
      }
    };

    renderFruitNames();
  });

  return (
    <Container className={css.container} maxWidth="xl">
      <Form fruits={fruits} />
    </Container>
  );
};

export default Home;
