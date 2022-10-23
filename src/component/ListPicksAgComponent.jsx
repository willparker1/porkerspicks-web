import React, {Component, useCallback, useRef} from 'react';
import pickService from "../services/PickService";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import {AgGridReact} from "ag-grid-react";
import alert from "bootstrap/js/src/alert";

const createNewRowData = () => {
    return {
        stake: 1,
        forecast: 'WIN',
        betType: 'RESULT'
    };
};

const addPicks = ((addIndex) => {
    const res = useRef.current.api.applyTransaction({
        add: createNewRowData(),
        addIndex: addIndex
    });
});

class ListPicksComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            columnDefs: [
                { headerName: "Stake", field: 'stake', sortable: true, filter: true, editable: true },
                { headerName: "Team", field: 'team',  sortable: true, filter: true, editable: true },
                { headerName: "Price", field: 'price',  sortable: true, filter: true, editable: true },
                { headerName: "Forecast", field: 'forecast', sortable: true, filter: true, editable: true },
                { headerName: "Bet Type", field: 'betType',  sortable: true, filter: true },
                { headerName: "Competition", field: 'competition',  sortable: true, filter: true },
                { headerName: "Venue", field: 'venue', sortable: true, filter: true },
                { headerName: "Opposition", field: 'opposition', sortable: true, filter: true },
            ],
            picks: []
        }
    }

    componentDidMount() {
        pickService.getPicks().then((res) => {
            this.setState( {picks: res.data})
        })
    }

    render() {
        return (
            <div className="ag-theme-balham"
                 style={{
                     width: 1600,
                     height: 1000
                 }}>
                <div style={{ marginBottom: '4px' }}>
                    <button onClick={() => addPicks(5)}>Add Pick</button>
                </div>
                <AgGridReact editType='fullRow' columnDefs={this.state.columnDefs} rowData={this.state.picks} />
            </div>
        );
    }
}

export default ListPicksComponent;