import React from "react";
import prevIcon from "../../icons/prev.png";
import "./buttons-style.css";

const PrevButton = () => {
    return(
        <img className="playerBtn" src={prevIcon} alt="Prev" />
    )
}

export default PrevButton;
