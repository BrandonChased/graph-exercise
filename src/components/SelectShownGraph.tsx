import React from 'react'

function SelectShownGraph(props: any) {
    return (
        <div className="mt-5">
            {!props.barChecked && (
                <button
                    className="btn btn-info"
                    onClick={() => props.setSelectedGraph("Bar")}
                >
                    Bar Graph
                </button>
            )}
            {!props.lineChecked && (
                <button
                    className="btn btn-info"
                    onClick={() => props.setSelectedGraph("Line")}
                >
                    Line Graph
                </button>
            )}
            {!props.pieChecked && (
                <button
                    className="btn btn-info"
                    onClick={() => props.setSelectedGraph("Pie")}
                >
                    Pie Chart
                </button>
            )}
            {!props.scatterChecked && (
                <button
                    className="btn btn-info"
                    onClick={() => props.setSelectedGraph("Scatter")}
                >
                    Scatterplot Graph
                </button>
            )}
        </div>
    )
}

export default SelectShownGraph