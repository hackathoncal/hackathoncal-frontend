import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';
import {useSelector, useDispatch} from "react-redux";
import actions from "../../redux/actions/action";
import "./scenariosList.scss";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 600,
    },
    active: {
        backgroundColor: "light-blue"
    }
}));

function ScenarioList() {
    const dispatch = useDispatch();
    const setCurScenario = (scenario) => dispatch(actions.setCurScenario(scenario));
    const classes = useStyles();
    const [activeIndex, setActiveIndex] = React.useState(-1);
    const scenariosList = useSelector(state => {
            return state.reducer.filterScenarios;
        }
    );

    const handleClick = (scenario, index) => {
        setActiveIndex(index);
        setCurScenario(scenario);
    };

    if (!scenariosList || scenariosList.length < 1) {
        return (<p style={{fontWeight: "bolder", marginLeft: "2vw"}}>No matches scenarios founds</p>);
    }

    return (
        <List component="nav" className={classes.root} aria-label="contacts">
            {scenariosList &&
            scenariosList.map((scenario, index) =>
                <ListItem button key={scenario.id}
                          className={index === activeIndex && "active"}
                >
                    <StarIcon/>
                    <span style={{position: "relative", left: "1.5vw"}}>{index + 1}</span>
                    <ListItemText inset primary={scenario.name} onClick={() => {
                        handleClick(scenario, index)
                    }}/>
                </ListItem>
            )}
        </List>
    );
}


export default ScenarioList;

