import React from "react";
import { v4 as uuidv4 } from "uuid";
import SimpleProp from "./SimpleProp";
import "../styles/object-prop.css"

const ObjectProp = ({ propKey, PropValue }) => {
  const renderNestedProperties = () => {
    if (!PropValue) {
      return (
        <ul>
          <span>null</span>
        </ul>
      );
    }

    let nestesObjectStep = [];
    const nestedPropertiesKeys = Object.keys(PropValue);
    for (let nestedPropertyKey of nestedPropertiesKeys) {
      nestesObjectStep.push(
        <ul key={uuidv4()}>
          <SimpleProp
            key={uuidv4()}
            propKey={nestedPropertyKey}
            PropValue={PropValue[nestedPropertyKey]}
          />
        </ul>
      );
    }

    return nestesObjectStep;
  };

  const objectPropIcon = () => {
    switch(propKey){
      case "if_true":
        return "far fa-question-circle"
      case "if_false":
        return "far fa-question-circle"
      default:
        return "far fa-play-circle"
    }
  }

  return (
    <div>
      <li key={uuidv4()}>
        <details >
          <summary className="object-props-summary">
            <div><span><i className={`object-prop-icon ${objectPropIcon()}`}></i></span><span>{propKey}</span></div>
          </summary>
          {renderNestedProperties()}
        </details>
      </li>
    </div>
  );
};

export default ObjectProp;
