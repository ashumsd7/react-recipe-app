import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

function Cuisine() {
  const API_KEY = "2c42a08d45f64a3a8fc6e5878cafd704";

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
  return <div>Cuisine</div>;
}

export default Cuisine;
