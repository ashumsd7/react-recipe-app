import { useEffect, useState } from "react";

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
      {popular.map((recipe) => {
        return (
          <div key={recipe.id}>
            <p>{recipe.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Popular;
