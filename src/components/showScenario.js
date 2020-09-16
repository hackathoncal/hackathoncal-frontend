import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import SimpleCard from './cardComponent';

// import Icon from '@material-ui/core/Icon';
// import SaveIcon from '@material-ui/icons/Save';



import { scenario1, nodes } from "./constants";
import OptionsButtons from "./optionGroup";

const useStyles = makeStyles((theme) => ({
    root: {
        ...theme.typography.button,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(1),
    },
    button: {
        margin: theme.spacing(1),
    },
}));


export default function ShowScenario() {
    const classes = useStyles();

    const scenario = scenario1;
    const allNodes = nodes;

    const firstNodeID = scenario.first_node;

    const [activeNodeID, setActiveNodeID] = React.useState(firstNodeID);

    const [previousIDs, setPreviousIDs] = React.useState([firstNodeID]);


    const getOptions = () => {
        const activeNode = allNodes.filter(item => item.id === activeNodeID)[0];

        const options = activeNode.options;

        return options;

    }

    const selectOption = id => {
        console.log(id);
        if (id !== null) {
            setActiveNodeID(id);
        }

    }

    const getActiveNodeText = () => {
        const activeNode = allNodes.filter(item => item.id === activeNodeID)[0];
        return activeNode.text;
    }

    const getActiveNodeUrl = () => {
        const activeNode = allNodes.filter(item => item.id === activeNodeID)[0];
        return activeNode.url;
    }

    const getActiveNodeTooltip = () => {
        const activeNode = allNodes.filter(item => item.id === activeNodeID)[0];
        console.log(activeNode.tooltip);
        return activeNode.tooltip;
    }

    const updatePreviousIDs = id => {
        if (id !== null) {
            const ids = previousIDs;
            ids.push(id);
            console.log(ids);
            setPreviousIDs(ids);
        }

    }

    const handleBack = () => {
        if (previousIDs.length > 1) {
            const ids = previousIDs;
            ids.pop();
            setPreviousIDs(ids);
            setActiveNodeID(previousIDs[previousIDs.length - 1])
        }
    }

    const backButtonDisabled = previousIDs.length <= 1;


    return (
        <>
            <Container fixed>
                <div className>
                    <Typography variant="h4" component="h4">
                        {scenario.name}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        {scenario.description}
                    </Typography>
                </div>
                <SimpleCard text={getActiveNodeText()} learnMore={getActiveNodeTooltip()} />

                <span style={{ display: "flex" }}>
                    <OptionsButtons
                        options={getOptions()}
                        url={getActiveNodeUrl()}
                        selectOption={(id) => selectOption(id)}
                        updatePreviousIDs={(id) => updatePreviousIDs(id)}
                    />

                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        disabled={backButtonDisabled}
                        onClick={handleBack}
                    // startIcon={<SaveIcon />}
                    >
                        Back
                    </Button>
                </span>
            </Container>
        </>
    );
}
