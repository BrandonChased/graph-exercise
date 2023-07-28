import React, { useState } from "react";
import BarGraph from "./components/BarGraph";
import LineGraph from "./components/LineGraph";
import PieGraph from "./components/PieGraph";
import ScatterGraph from "./components/ScatterGraph";


type GraphProps = {
  exampleData: any[]
}

export function Graph({ exampleData }: GraphProps) {

  const [selectedGraph, setSelectedGraph] = useState("Line");

  const changeGraph = (graphType: string) => {
    setSelectedGraph(graphType)
  }

  return (
    <div>
      <ul className="mt-5">
        <button className="btn btn-info mx-2" onClick={() => changeGraph("Bar")}>Bar Graph</button>
        <button className="btn btn-info mx-2" onClick={() => changeGraph("Line")}>Line Graph</button>
        <button className="btn btn-info mx-2" onClick={() => changeGraph("Pie")}>Pie Chart</button>
        <button className="btn btn-info mx-2" onClick={() => changeGraph("Scatter")}>Scatterplot Graph</button>
      </ul>
      <div className="graphs container">
        {selectedGraph == "Bar" &&
          <div>
            <BarGraph data={exampleData}>
            </BarGraph>
          </div>
        }
        {selectedGraph == "Line" &&
          <div>
            <LineGraph data={exampleData}>
            </LineGraph>
          </div>
        }
        {selectedGraph == "Pie" &&
          <div>
            <PieGraph data={exampleData}>
            </PieGraph>
          </div>
        }
        {selectedGraph == "Scatter" &&
          <div>
            <ScatterGraph data={exampleData}>
            </ScatterGraph>
          </div>
        }
      </div>
    </div>
  );
};
