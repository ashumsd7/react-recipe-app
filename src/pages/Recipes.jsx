import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { API_KEY } from "../api/api";
function Recipe() {
  //   const API_KEY = "2c42a08d45f64a3a8fc6e5878cafd704";
  const [details, setDetails] = useState([]);
  const params = useParams();

  const [activeTab, setActiveTab] = useState("instructions");
  useEffect(() => {
    fetchDetails();
  }, []);
  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${API_KEY}`
    );

    const detailedData = await data.json();
    console.log("first,", detailedData);
    setDetails(detailedData);
  };

  return (
    <DetailedWrapper>
      <div>
        <h2>{details.title}</h2>

        <img src={details.image} alt={details.id} />
      </div>

      <StyledInfo>
        <StyledBtn
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => {
            setActiveTab("instructions");
          }}
        >
          Details
        </StyledBtn>
        <StyledBtn
          className={activeTab === "kya" ? "active" : ""}
          onClick={() => {
            setActiveTab("kya");
          }}
        >
          Kaise Banaya ?
        </StyledBtn>

        {activeTab === "instructions" && (
          <OverFlowDiv>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </OverFlowDiv>
        )}

        {activeTab === "kya" && (
          <OverFlowDiv>
            <ul>
              {details.extendedIngredients.map((ingre) => {
                return <li key={ingre.id}>{ingre.original}</li>;
              })}
            </ul>
          </OverFlowDiv>
        )}
      </StyledInfo>
    </DetailedWrapper>
  );
}

// styles

const DetailedWrapper = styled.div`
  margin-bottom: 5rem;
  margin-top: 10rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;

const StyledBtn = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;

const StyledInfo = styled.div`
  margin-left: 10rem;
`;

const OverFlowDiv = styled.div`
  height: 400px;
  overflow-y: scroll;
`;
export default Recipe;
