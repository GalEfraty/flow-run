import React from "react";
import "../styles/style.css";
import "../styles/simple-prop.css"

const SimpleProp = ({ propKey, PropValue }) => {
  const simplePropIcon = () => {
    switch (propKey) {
      case "run_time":
        return ("far fa-clock");
      case "return_value":
        return ("far fa-arrow-alt-circle-left")
      case "function":
        return "fab fa-react";
      default:
        return ("far fa-circle");
    }
  };


  return (
    <div>
      <li>
        <div className="simple-prop-content-wrapper">
          <span><i className={`simple-prop-icon ${simplePropIcon()}`}></i></span>
          <span className="simple-prop-key">{propKey} :</span>
          <span className="simple-prop-value">{PropValue}</span>
        </div>
      </li>
    </div>
  );
};

export default SimpleProp;
