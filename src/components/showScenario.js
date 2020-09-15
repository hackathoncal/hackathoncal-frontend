import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { addOne, subtractOne } from "../redux/actions/counterAction.js";
import { connect } from "react-redux";
import { scenario1, nodes } from "./constants";
import VerticalLinearStepper from "./stepperMenu";

const useStyles = makeStyles((theme) => ({
    root: {
        ...theme.typography.button,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(1),
    },
}));


export default function ShowScenario() {
    const classes = useStyles();

    const scenario = scenario1;
    const allNodes = nodes;

    const getSteps = () => {

        const allTexts = allNodes.map(item => item.text);
        return allTexts;
    }

    const getStepContent = step => {
    
        const options = nodes[step].options;

        console.log(options);

        const steps = options.map(item => item.text);

        console.log(steps);

        return steps.join(", ");

    }


    return (
        <>
            <div className={classes.root}>
                <Typography variant="h3" component="h3">
                    {scenario.name}
                </Typography>
                <Typography variant="h6" component="h6">
                    {scenario.description}
                </Typography>
            </div>
            <VerticalLinearStepper getSteps={getSteps} getStepContent={(id) => getStepContent(id)} />
        </>
    );
}
