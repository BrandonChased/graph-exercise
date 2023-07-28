import React from 'react';
import "../css/GraphSelectPanel.css";

function SelectShownGraph(props: any) {
    return (
        <div className="graph-select-panel">
            {!props.barChecked && (
                <div
                    className="options-tab"
                    onClick={() => props.setSelectedGraph("Bar")}
                >
                    Bar Graph
                </div>
            )}
            {!props.lineChecked && (
                <div
                    className="options-tab"
                    onClick={() => props.setSelectedGraph("Line")}
                >
                    Line Graph
                </div>
            )}
            {!props.pieChecked && (
                <div
                    className="options-tab"
                    onClick={() => props.setSelectedGraph("Pie")}
                >
                    Pie Chart
                </div>
            )}
            {!props.scatterChecked && (
                <div
                    className="options-tab"
                    onClick={() => props.setSelectedGraph("Scatter")}
                >
                    Scatterplot Graph
                </div>
            )}
        </div>
    );
}

export default SelectShownGraph;