import React from "react";
import { v4 as uuidv4 } from "uuid";
import ObjectProp from "./ObjectProp";
import SimpleProp from "./SimpleProp.js";
import "../styles/style.css";
import "../styles/tree-node.css"

const TreeNode = ({ node }) => {
  const renderStepProperties = step => {
    let stepDataList = [];
    const stepObjKeys = Object.keys(step);
    for (let stepKey of stepObjKeys) {
      if (typeof step[stepKey] === "object") {
        stepDataList.push(
          <ObjectProp
            key={uuidv4()}
            propKey={stepKey}
            PropValue={step[stepKey]}
          />
        );
      } else {
        stepDataList.push(
          <SimpleProp
            key={uuidv4()}
            propKey={stepKey}
            PropValue={step[stepKey]}
          />
        );
      }
    }
    return stepDataList;
  };
  const renderGeneralProperties = () => {
    let nodeGeneralDataList = [];
    const nodeObjKeys = Object.keys(node);
    for (let nodeKey of nodeObjKeys) {
      if (typeof node[nodeKey] !== "object") {
        nodeGeneralDataList.push(
          <SimpleProp
            key={uuidv4()}
            propKey={nodeKey}
            PropValue={node[nodeKey]}
          />
        );
      }
    }
    return nodeGeneralDataList;
  };

  const treeNodeIcon = (currentNode) => {
    switch(currentNode.step.type){
      case "FunctionStep":
        return "far fa-file-code";
      case "ConditionStep":
        return "fas fa-question";
      case "ForLoopStep":
        return "fas fa-redo";
      case "Flow":
        return "fas fa-angle-double-right";
      default: 
      return "fas fa-dot-circle"
    }

  }

  const renderNextSteps = () => {
    return (
      <li>
        <details>
          <summary>Next Steps</summary>
          <ul>
            {node.child_runs.map((currentNode, index) => {
              return (
                <li key={uuidv4()}>
                  <details>
                    <summary className="node-tree-summary">
                      {`{${index}}`}  <span><i className={`tree-node-icon ${treeNodeIcon(currentNode)}`}></i></span> {currentNode.step.title}
                    </summary>
                    <TreeNode node={currentNode} />
                  </details>
                </li>
              );
            })}
          </ul>
        </details>
      </li>
    );
  };

  return (
    <ul>
      {renderGeneralProperties(node)}
      {node.step && renderStepProperties(node.step)}
      {node.child_runs.length > 0 && renderNextSteps()}
    </ul>
  );
};

export default TreeNode;
