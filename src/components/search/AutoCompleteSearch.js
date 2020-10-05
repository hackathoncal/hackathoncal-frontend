import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Card from "@material-ui/core/Card/Card";
import {useSelector, useDispatch} from "react-redux";
import actions from "../../redux/actions/action";


export default function AutoCompleteSearch(props) {
    const dispatch=useDispatch();
    const setFilter = (scenarios) => dispatch(actions.setFilterScenarios(scenarios));
    const clearFilter = () => dispatch(actions.clearFilterScenarios());
    const setCurScenario = (scenario) => dispatch(actions.setCurScenario(scenario));

    const scenariosData = useSelector(state=>state.reducer.filterScenarios);
    return (
        <div >

        <Autocomplete
            id="combo-box-demo"
            options={scenariosData}
            getOptionLabel={(option) => option.name}
            style={{ width: "100%" }}
            selectOnFocus={true}
            onChange={(event, value, reason) => {
                if(value && reason==='select-option') {
                    setFilter(value);
                    setCurScenario(value);
                }
                if(reason==='clear'){
                    clearFilter();
                }
            }}
            onClose={(event, reason) => {
                if(reason==='clear'){
                    clearFilter();
                }
            }}
            renderInput={(params) => <TextField {...params} label="Search for scenario" variant="outlined" />}
        />
        </div>
    );
}

