import React, { Component } from "react";
import { connect } from "react-redux";
import ShowScenario from "./showScenario";
import "./Main.scss";
import AddNewScenario from "./AddNewScenario";
import Option from "./Option";
import AppBar from "../components/app-bar/AppBar";
import Search from "../components/search/Search";
import ScenarioList from "../components/scenarios-list/ScenarioList";
import Dropdown from "../components/drop-downs/Dropdown";
import Container from '@material-ui/core/Container';


class Main extends Component {

    render() {
        return (
            <React.Fragment>
                <Container fixed>

                <AppBar />
                <Search />
                <Dropdown />
                <ScenarioList />
                {/*<ShowScenario />*/}
                </Container>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);