import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";

const Popular = () => {
  const NUMBER_OF_RECIPE = 5;
  const API_KEY = "4092cf00257a40e295e69ce5bcd67703";

  useEffect(() => {
    console.log(process.env.REACT_APP_API_KEY);
    getPopular();
  }, []);

  const [popular, setPopular] = useState([]);

  const getPopular = async () => {
    console.log(process.env.REACT_APP_API_KEY);
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=${NUMBER_OF_RECIPE}`
    );

    const data = await api.json();

    setPopular(data.recipes);
  };
  return (
    <div>
      return (
      <Wrapper>
        <h3>Popular Picks</h3>
        <Splide>
          {popular.map((recipe) => {
            return (
              <SplideSlide>
                <Card>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
      );
    </div>
  );
};

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;

  img {
    border-radius: 2rem;
  }
`;

export default Popular;
