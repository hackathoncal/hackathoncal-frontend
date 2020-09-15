import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CreateNewScenarioModal from "../CreateNewScenarioModal";




function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};
const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },

}));
export default function HideAppBar(props) {
    const state = {
        showCreateScenarioModal: false
    }

    const classes = useStyles();

    const handleCreateScenarioBtnClick = () => {
        this.setState({showCreateScenarioModal: true})
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar>
                    <Toolbar>
                        <Typography variant="h6">Hackathon 2020: CALIBRATION GROUP </Typography>
                        <Button onClick={this.handleCreateScenarioBtnClick} size="large" className={classes.margin} style={{color: "white", backgroundColor:"green",position: "relative", left: "50vw"}}>
                            Add scenario
                        </Button>
                        {this.state.showCreateScenarioModal && <CreateNewScenarioModal />}
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar />

        </React.Fragment>
    );
}