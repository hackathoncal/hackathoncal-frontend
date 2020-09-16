import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';
import {connect} from "react-redux";
import {getScenariosList, createScenario} from "../../redux/actions/action";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

function ScenarioList({scenarios, getScenariosList, createScenario}) {
    const classes = useStyles();
    useEffect(() => {
        getScenariosList();
        //eslint-disable-next-line

    });
    console.log("scenarios length");
    console.log(scenarios);

    let scenariosList = [
        {
            "id": 1,
            "name": "Can't pass powerup",
            "description": "Loren inspam ",
            "tags": ["git", "MATLAB", "Devops"],
            "category": "MATLAB",
            "date": "14.09.2020",
            "first_node_id": 2
        },
        {
            "id": 2,
            "name": "Can't pass bs2 bft",
            "description": "Loren inspam ",
            "tags": ["git", "MATLAB", "Devops"],
            "category": "MATLAB",
            "date": "14.09.2020",
            "first_node_id": 2
        },
        {
            "id": 3,
            "name": "Can't pass bs2 bft",
            "description": "Loren inspam ",
            "tags": ["git", "Devops"],
            "category": "MATLAB",
            "date": "14.09.2020",
            "first_node_id": 2
        }
    ];

    const handleClick = (scenario) => {
        console.log(scenario);
        createScenario(scenario);
    };
    return (

        <List component="nav" className={classes.root} aria-label="contacts">
            {scenariosList.map(scenario =>
                <ListItem button>
                    <StarIcon/>
                    <ListItemText inset primary={scenario.name} onClick={() => {
                        handleClick(scenario)
                    }}/>
                </ListItem>
            )}
        </List>
    );
}

const mapStateToProps = (state) => ({
    scenarios: state.scenarios
});

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getScenariosList: () => dispatch(getScenariosList()),
//         createScenario: (scenario) => dispatch(scenario(scenario))
//     };
// };

export default connect(mapStateToProps, {getScenariosList, createScenario})(ScenarioList);

