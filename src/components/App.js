import React, { useState } from "react";
import "../styles/general.css";
import "../styles/style.css";
import dataFile from "../files/data.json";
import Upload from "./Upload";
import TreeNode from "./TreeNode";

function App() {
  const [showTree, setShowTree] = useState(false);

  const toggleDisplayFile = () => {
    showTree ? setShowTree(false) : setShowTree(true);
  };

  return (
    <div className="App">
      <Upload toggleDisplayFile={toggleDisplayFile} />
      <div className="container">{showTree && <TreeNode node={dataFile} open={true}/>} </div>
    </div>
  );
}

export default App;
