import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {useSelector,useDispatch} from "react-redux";
import actions from "../../redux/actions/action";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const filterByCategory = (scenarios = [], category) => {
    if (category.toLowerCase() === "none") {
        return scenarios;
    } else {
        const filtered = scenarios.filter((scenario) => {
            return scenario.category.toLowerCase() === category.toLowerCase();
        });
        return filtered;
    }
};

export default function SimpleSelect() {
    const dispatch = useDispatch();
    const setFilterScenarios =(scenarios) => dispatch(actions.setFilterScenarios(scenarios));
    const setCurScenario =(scenario) => dispatch(actions.setCurScenario(scenario));
    const classes = useStyles();
    const [category, setCategory] = React.useState('none');

    const categories = useSelector(state=>state.reducer.categories);
    const scenarios = useSelector(state=>state.reducer.scenarios);

    const handleChange = (event) => {
        setCategory(event.target.value);

        const test = filterByCategory(scenarios,event.target.value);
        console.log("test");
        console.log(test);
        setFilterScenarios(test);
        if(test.length===1) {
            setCurScenario(test[0]);
        }
    };

    return (
        <div>

            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-helper-label">Categories</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={category}
                    onChange={handleChange}
                >
                    <MenuItem value={"none"}>
                        <em>None</em>
                    </MenuItem>
                    {categories.map((category, index)=>{
                       return <MenuItem key={index} value={category.name}>{category.name}</MenuItem>
                    })}
                </Select>
            </FormControl>
        </div>
    );
}