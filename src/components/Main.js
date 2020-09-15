import React, { Component } from "react";
import { connect } from "react-redux";
import ShowScenario from "./showScenario";
import "./Main.scss";
import AddNewScenario from "./AddNewScenario";
import AppBar from "../components/app-bar/AppBar";
import Search from "../components/search/Search";
import ScenarioList from "../components/scenarios-list/ScenarioList";
import Dropdown from "../components/drop-downs/Dropdown";
import Container from '@material-ui/core/Container';
import CreateNewScenarioModal from "./CreateNewScenarioModal";


class Main extends Component {
    state = {
        showCreateNewScenarioModal: false
    }

    handleShowCreateNewScenarioModalBtnClick = (showCreateNewScenarioModal) => {
        this.setState({showCreateNewScenarioModal: showCreateNewScenarioModal})
    }

    render() {
        return (
            <React.Fragment>
                <Container fixed>

                <AppBar handleShowCreateNewScenarioModalBtnClick={this.handleShowCreateNewScenarioModalBtnClick}/>
                {/*<Search />*/}
                {/*<Dropdown />*/}
                {/*<ScenarioList />*/}
                <ShowScenario />
                {this.state.showCreateNewScenarioModal && <CreateNewScenarioModal handleShowCreateNewScenarioModalBtnClick={this.handleShowCreateNewScenarioModalBtnClick}/> }
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