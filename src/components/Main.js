import React, { Component } from "react";
import { connect } from "react-redux";
import ShowScenario from "./showScenario";
import "./Main.scss";
import AddNewScenario from "./AddNewScenario";
import AppBar from "../components/app-bar/AppBar";
import Search from "../components/search/Search";
import ScenariosContainer from "../components/scenarios/ScenariosContainer";
import DropDownListContainer from "../components/drop-downs/DropDownListContainer";
import Container from '@material-ui/core/Container';


class Main extends Component {

    render() {
        return (
            <React.Fragment>
                <Container fixed>

                <AppBar />
                <Search />
                <DropDownListContainer />
                <ScenariosContainer />
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