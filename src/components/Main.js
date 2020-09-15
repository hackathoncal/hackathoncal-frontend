import React, {Component} from "react";
import {connect} from "react-redux";
import "./Main.scss";
// import AddNewScenario from "./AddNewScenario";
import AppBar from "../components/app-bar/AppBar";
import Search from "../components/search/Search";
import ScenariosContainer from "./scenarios/ScenariosContainer";
import DropDownListContainer from "./drop-downs/DropDownListContainer";

import Container from '@material-ui/core/Container';


class Main extends Component {

    render() {
        return (
            <React.Fragment>
                <Container fixed>
                    <AppBar/>
                    <Search/>
                    <DropDownListContainer/>
                    <ScenariosContainer/>
                </Container>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);