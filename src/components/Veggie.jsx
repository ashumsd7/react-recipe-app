import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";
import { API_KEY } from "../api/api";

const Veggie = () => {
  const NUMBER_OF_RECIPE = 5;
//   const API_KEY = "4092cf00257a40e295e69ce5bcd67703";

  useEffect(() => {
    console.log(process.env.REACT_APP_API_KEY);
    getVeggie();
  }, []);

  const [veggie, setVeggie] = useState([]);

  const getVeggie = async () => {
    console.log(process.env.REACT_APP_API_KEY);
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=${NUMBER_OF_RECIPE}&number=9&tags=vegetarian`
    );

    const check = localStorage.getItem("veggie");
    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const data = await api.json();
      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      setVeggie(data.recipes);
    }
  };

  return (
    <div>
      <Wrapper>
        <h3>Veggies Picks</h3>
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}
        >
          {veggie.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={"/recipe/" + recipe.id}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 15rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 10%;
    transform: translate(-50%, 50%);
    color: white;
    text-align: center;
    font-weight: 700;
    font-size: 1rem;
    width: 100%;
    text-shadow: 4px 2px 6px gray;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Veggie;
