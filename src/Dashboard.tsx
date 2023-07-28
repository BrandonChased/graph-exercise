import React, { useState } from "react";
import DisableGraphs from "./components/DisableGraphs";
import SelectShownGraph from "./components/SelectShownGraph";
import ChosenGraph from "./components/Graph";

type GraphProps = {
  exampleData: any[]
}

export function Graph({ exampleData }: GraphProps) {

  const [selectedGraph, setSelectedGraph] = useState("Bar");

  const [barChecked, setBarChecked] = useState(false);
  const [lineChecked, setLineChecked] = useState(false);
  const [pieChecked, setPieChecked] = useState(false);
  const [scatterChecked, setScatterChecked] = useState(false);

  return (
    <div className="p-5">
      <DisableGraphs
        barChecked={barChecked}
        lineChecked={lineChecked}
        pieChecked={pieChecked}
        scatterChecked={scatterChecked}
        setBarChecked={setBarChecked}
        setLineChecked={setLineChecked}
        setPieChecked={setPieChecked}
        setScatterChecked={setScatterChecked}
      />
      <ChosenGraph 
        selectedGraph={selectedGraph}
      />
      <SelectShownGraph
        setBarChecked={setBarChecked}
        setLineChecked={setLineChecked}
        setPieChecked={setPieChecked}
        setScatterChecked={setScatterChecked}
        setSelectedGraph={setSelectedGraph}         
        barChecked={barChecked}
        lineChecked={lineChecked}
        pieChecked={pieChecked}
        scatterChecked={scatterChecked}
      />
    </div>
  );
};
