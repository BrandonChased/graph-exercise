import React, { useState } from "react";
import { exampleData } from "./initialData";
import { Graph } from "./Dashboard";

const App: React.FC = () => {
  
  return (
    <React.Fragment>
      <Graph exampleData={exampleData}/>
    </React.Fragment>
  );
};

export default App;
