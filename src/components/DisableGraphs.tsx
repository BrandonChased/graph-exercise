import React from 'react';
import "../css/DisabledGraphs.css";

function DisableGraphs(props: any) {
    return (
        <div className='disabled-graphs'>
            <div>
                <h2 className='disable-header'>Admin Panel</h2>
                <ul className="disable-inputs">
                    <h2 className='disabled-graphs-title'>Disable Graphs</h2>
                    <div className="disable-input" onClick={() => props.setBarChecked(!props.barChecked)}>
                        <label htmlFor="bar" className='disable-label'>Bar</label>
                        <input
                            type="checkbox"
                            name="bar"
                            checked={props.barChecked}
                            onChange={() => props.setBarChecked(!props.barChecked)}
                        />
                    </div>
                    <div className="disable-input" onClick={() => props.setLineChecked(!props.lineChecked)}>
                        <label htmlFor="line" className='disable-label'>Line</label>
                        <input
                            type="checkbox"
                            name="line"
                            checked={props.lineChecked}
                            onChange={() => props.setLineChecked(!props.lineChecked)}
                        />
                    </div>
                    <div className="disable-input" onClick={() => props.setPieChecked(!props.pieChecked)}>
                        <label htmlFor="pie" className='disable-label' >Pie</label>
                        <input
                            type="checkbox"
                            name="pie"
                            checked={props.pieChecked}
                            onChange={() => props.setPieChecked(!props.pieChecked)}
                        />
                    </div>
                    <div className="disable-input" onClick={() => props.setScatterChecked(!props.scatterChecked)}>
                        <label htmlFor="scatter" className='disable-label' >Scatter</label>
                        <input
                            type="checkbox"
                            name="scatter"
                            checked={props.scatterChecked}
                            onChange={() => props.setScatterChecked(!props.scatterChecked)}
                        />
                    </div>
                </ul>
            </div>
        </div>

    )
}

export default DisableGraphs;