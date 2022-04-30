import React from "react";
import { Link } from "react-router-dom";
import "./ReadingMaterials.css";

function ReadingMaterials() {
  return (
    <>
      <div className="readingMaterials">
        <div className="readingMaterialsContainer">
          <h1>Reading Materials will go here</h1>
          <Link to={"/dashboard"}>
            <button className="loginbtn">Dashboard</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ReadingMaterials;
