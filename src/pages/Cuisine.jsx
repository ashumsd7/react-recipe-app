import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { API_KEY } from "../api/api";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Cuisine() {
  //   const API_KEY = "2c42a08d45f64a3a8fc6e5878cafd704";

  let params = useParams();
  const [cuisine, setCuisine] = useState([]);

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  const getCuisine = async (name) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&cuisine=${name}`
    );

    const recipes = await api.json();
    setCuisine(recipes.results);
  };
  return (
    <Grid
     animate={{opacity:1}}
     initial= {{ opacity:0}}
     exit= {{ opacity:0}}
     transition= {{duration:0.5}}
    >
      {cuisine.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={"/recipe/" + item.id}>
              <img src={item.image} alt={item.id}></img>
              <h4>{item.title}</h4>
            </Link>
          </Card>
        );
      })}

      {cuisine.length === 0 && (
        <Card>
          <img
            height="300"
            width="100"
            className="mt-4"
            alt="no found image"
            src="https://img.freepik.com/premium-vector/little-girl-feel-hungry_10045-208.jpg?w=2000"
          />
          <h4> No {params.type} Cuisine Available.</h4>
          <h4>Please try after some time.</h4>
        </Card>
      )}
    </Grid>
  );
}

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
    object-fit: contain;
  }

  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Cuisine;
