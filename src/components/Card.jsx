import React from "react";
import { useNavigate } from "react-router-dom";
function Card(props) {
  const navigate = useNavigate();
  function handleClick(e) {
    navigate(`Products/${e.target.value}`);
  }
  return (
    <div className="card">
      <img className="img" src={props.img} alt={props.alt} />
      <h1>{props.name}</h1>
      <p className="price">{props.price}</p>
      <p>
        <button value={props.list} onClick={handleClick}>
          Details
        </button>
      </p>
    </div>
  );
}

export default Card;
