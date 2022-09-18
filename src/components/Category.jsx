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
      <SLink to={"/cuisine/Italian"}>
        {" "}
        <GiPizzaSlice /> <h4>Italian</h4>
      </SLink>
      <SLink to={"/cuisine/American"}>
        {" "}
        <GiHamburger /> <h4>American</h4>
      </SLink>
      <SLink to={"/cuisine/Thai"}>
        {" "}
        <GiNoodles /> <h4>Thai food</h4>
      </SLink>
      <SLink to={"/cuisine/Japanese"}>
        {" "}
        <GiChopsticks /> <h4>Japanese</h4>
      </SLink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(39deg, #494949, #313231);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.9);

  h4 {
    color: white;
    font-size: 0.8rem;
  }

  svg {
    color: white;
    font-size: 1.5rem;
  }

  &.active {
    background: linear-gradient(to right, #f27121, #e94057);

    svg {
      color: white;
    }
    h4 {
      color: white;
    }
  }
`;

export default Category;
