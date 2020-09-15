import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { scenario1, nodes } from "./constants";
import VerticalLinearStepper from "./stepperMenu";
import OptionsButtons from "./optionGroup";

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

    const firstNodeID = scenario.first_node;

    const [activeNodeID, setActiveNodeID] = React.useState(firstNodeID);
    

    const getSteps = () => {

        const allTexts = allNodes.map(item => item.text);
        return allTexts;
    }

    const getStepContent = step => {
    
        const options = nodes[step].options;

        const steps = options.map(item => item.text);

        return steps.join(", ");

    }

    const getOptions = () => {
        const activeNode = allNodes.filter(item => item.id === activeNodeID)[0];

        console.log(activeNode[0]);

        const options = activeNode.options;

        console.log(options);
    
        return options;

    }

    const selectOption = id => {
        console.log(id);
        if (id !== null){
            setActiveNodeID(id);
        }
        
    }

    const getActiveNodeText = () => {
        const activeNode = allNodes.filter(item => item.id === activeNodeID)[0];
        return activeNode.text;
    }


    return (
        <>
            <div className>
                <Typography variant="h3" component="h3">
                    {scenario.name}
                </Typography>
                <Typography variant="h5" component="h6">
                    {scenario.description}
                </Typography>
            </div>
            <div className={classes.root}>{getActiveNodeText()}</div>
               
                <OptionsButtons options={getOptions()} selectOption={(id) => selectOption(id)}/>
            {/* <VerticalLinearStepper getSteps={getSteps} getStepContent={(id) => getStepContent(id)} getOptions={getOptions} /> */}
        </>
    );
}
