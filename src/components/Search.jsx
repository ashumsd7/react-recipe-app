import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");

  const navigate = useNavigate();
  function onSubmit(e) {
    e.preventDefault();
    navigate(`/searched/${input}`);
  }
  return (
    <FormStyle onSubmit={onSubmit}>
      <FaSearch />
      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
      ></input>
    </FormStyle>
  );
}

export default Search;

const FormStyle = styled.form`
  margin: 0rem;
  position: relative;
  width: 100%;
  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    padding: 1rem 3rem;
    border-radius: 1rem;
    color: #fff;
    outline: none;
    width: 100%;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`;
