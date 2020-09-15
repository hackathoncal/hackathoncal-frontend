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
import CreateNewScenario from "./CreateNewScenario";
import CreateScenarioModal from "./CreateScenarioModal";


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
                {/*<DropDownListContainer />*/}
                {/*<ScenariosContainer />*/}
                {/*<ShowScenario />*/}
                {/*{this.state.showCreateNewScenarioModal && <CreateNewScenario handleShowCreateNewScenarioModalBtnClick={this.handleShowCreateNewScenarioModalBtnClick}/> }*/}
                {this.state.showCreateNewScenarioModal &&
                    <CreateScenarioModal
                        showCreateNewScenarioModal={this.state.showCreateNewScenarioModal}
                        handleShowCreateNewScenarioModalBtnClick={this.handleShowCreateNewScenarioModalBtnClick}
                    /> }
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