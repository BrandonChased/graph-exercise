import React from 'react'
import BarGraph from "./BarGraph";
import LineGraph from "./LineGraph";
import PieGraph from "./PieGraph";
import ScatterGraph from "./ScatterGraph";
import { exampleData } from '../initialData';
import "../css/Graph.css";

function Graph(props:any) {
    return (
        <div className="graphs">
            <p className="display-1 mt-5">Overview</p>
            {props.selectedGraph == "Bar" &&
                <div className='graph'>
                    <BarGraph data={exampleData}>
                    </BarGraph>
                </div>
            }
            {props.selectedGraph == "Line" &&
                <div className='graph'>
                    <LineGraph data={exampleData}>
                    </LineGraph>
                </div>
            }
            {props.selectedGraph == "Pie" &&
                <div className='graph'>
                    <PieGraph data={exampleData}>
                    </PieGraph>
                </div>
            }
            {props.selectedGraph == "Scatter" &&
                <div className='graph'>
                    <ScatterGraph data={exampleData}>
                    </ScatterGraph>
                </div>
            }
        </div>
    )
}

export default Graph