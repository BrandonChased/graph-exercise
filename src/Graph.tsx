import React, { useState } from "react";
import BarGraph from "./components/BarGraph";
import LineGraph from "./components/LineGraph";
import PieGraph from "./components/PieGraph";
import ScatterGraph from "./components/ScatterGraph";
import DisableGraphs from "./components/DisableGraphs";
import SelectShownGraph from "./components/SelectShownGraph";


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
      <div className="graphs">
        <p className="display-1">Overview</p>
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
