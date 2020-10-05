import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import {useSelector, useDispatch} from 'react-redux';
import actions from "../../redux/actions/action";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 300,
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
    },
    noLabel: {
        marginTop: theme.spacing(3),
    },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};


const filterByTags = (scenarios = [], tags) => {
    const filterTags = [];
    const scenariosTagsToLowerCase = JSON.parse(JSON.stringify(scenarios));
    for(let i=0; i<scenariosTagsToLowerCase.length ;i++){
        let tagsOfScenario =  scenariosTagsToLowerCase[i].tags;
        for(let j=0;  j<tagsOfScenario.length ;j++){
            tagsOfScenario[j] = tagsOfScenario[j].toLowerCase();
        }
    }
    for (const scenario of scenarios) {
        for (const tag of tags) {
            if (scenario.tags.includes(tag.toLowerCase())) {
                filterTags.push(scenario);
                break;
            }
        }
    }
    return filterTags;
};


export default function MultipleSelect() {
    const dispatch = useDispatch();
    const setFilterScenarios = (scenarios) => dispatch(actions.setFilterScenarios(scenarios));
    const classes = useStyles();
    const [tagSuggestion, setTagSuggestion] = React.useState([]);
    const tagsName = useSelector(state => state.reducer.tags);
    const scenarios = useSelector(state => state.reducer.scenarios);
    const handleChange = (event) => {
        const tags = JSON.parse(JSON.stringify(tagSuggestion));
        tags.push(event.target.value);
        setTagSuggestion(event.target.value);
        const filteredScenarios = filterByTags(scenarios, tags[tags.length-1]);
        if(tags[tags.length-1].length===0){
            setFilterScenarios(scenarios);
        } else {
            setFilterScenarios(filteredScenarios);
        }
    };


    return (
        <FormControl className={classes.formControl}>
            <InputLabel id="demo-mutiple-checkbox-label">Tags</InputLabel>
            <Select
                labelId="demo-mutiple-checkbox-label"
                id="demo-mutiple-checkbox"
                multiple
                value={tagSuggestion}
                onChange={handleChange}
                input={<Input/>}
                renderValue={(selected) => selected.join(', ')}
                MenuProps={MenuProps}
            >
                {
                    tagsName.map((tag) => (
                        <MenuItem key={tag.id} value={tag.name}>
                            <Checkbox checked={tagSuggestion.indexOf(tag.name) > -1}/>
                            <ListItemText primary={tag.name}/>
                        </MenuItem>
                    ))}
            </Select>
        </FormControl>
    );
}
