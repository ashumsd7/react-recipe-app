// import {  FaHamburger } from "react-icons/fi";
import {
  GiNoodles,
  GiChopsticks,
  GiPizzaSlice,
  GiHamburger,
} from "react-icons/gi";
import styled from "styled-components";

// import { NavLink } from "react-router-dom";

import React from "react";

function Category() {
  return (
    <List>
      <div>
        {" "}
        <GiPizzaSlice /> <h4>Italian</h4>
      </div>
      <div>
        {" "}
        <GiHamburger /> <h4>American</h4>
      </div>
      <div>
        {" "}
        <GiNoodles /> <h4>Thai food</h4>
      </div>
      <div>
        {" "}
        <GiChopsticks /> <h4>Japanese</h4>
      </div>
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

export default Category;
