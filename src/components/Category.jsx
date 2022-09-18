// import {  FaHamburger } from "react-icons/fi";
import {
  GiNoodles,
  GiChopsticks,
  GiPizzaSlice,
  GiHamburger,
} from "react-icons/gi";
import styled from "styled-components";

import { NavLink } from "react-router-dom";

import React from "react";

function Category() {
  return (
    <List>
      <NavLink to={'/cuisine/Italian'}>
        {" "}
        <GiPizzaSlice /> <h4>Italian</h4>
      </NavLink>
      <NavLink to={'/cuisine/American'}>
        {" "}
        <GiHamburger /> <h4>American</h4>
      </NavLink>
      <NavLink to={'/cuisine/Thai'}>
        {" "}
        <GiNoodles /> <h4>Thai food</h4>
      </NavLink>
      <NavLink to={'/cuisine/Japanese'}>
        {" "}
        <GiChopsticks /> <h4>Japanese</h4>
      </NavLink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

export default Category;
