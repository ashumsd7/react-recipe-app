import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Searched() {
  const API_KEY = "2c42a08d45f64a3a8fc6e5878cafd704";
  const [searchedRecipes, setSearchedRecipes] = useState([]);

  let params = useParams();
  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  const getSearched = async (name) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${name}`
    );

    const recipes = await api.json();
    setSearchedRecipes(recipes.results);
  };

  return (
    <Grid>
      {searchedRecipes.map((item) => {
        return (
          <Card key={item.id}>
            <img src={item.image}></img>
            <h4>{item.title}</h4>
          </Card>
        );
      })}

      {searchedRecipes.length === 0 && (
        <Card>
          <img
            height="300"
            width="100"
            className="mt-4"
            src="https://media.istockphoto.com/vectors/cute-upset-fallen-ice-cream-404-vector-icon-concept-vector-id914875708?b=1&k=20&m=914875708&s=612x612&w=0&h=r7cXMvHUHG40tcCXqSfi5xA72C_UmNSACrNkzfgyrjo="
          />
          <h4>
            {" "}
            I think there is no food available with this `{params.search}`{" "}
          </h4>
          <h4>Please try something elIse.</h4>
        </Card>
      )}
    </Grid>
  );
}

const Grid = styled.div`
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

export default Searched;
