import React, { Component } from "react";
import { connect } from "react-redux";
import ShowScenario from "./showScenario";
import "./Main.scss";
import AppBar from "../components/app-bar/AppBar";
import Search from "../components/search/Search";
import ScenariosContainer from "../components/scenarios/ScenariosContainer";
import DropDownListContainer from "../components/drop-downs/DropDownListContainer";
import Container from '@material-ui/core/Container';
import CreateNewScenario from "./CreateNewScenario";
import CreateScenarioModal from "./CreateScenarioModal";
import CreateNodesTree from "./CreateNodesTree";


class Main extends Component {
    state = {
        showCreateNewScenarioModal: false,
        showCreateNodesTreeModal: false
    }

    handleShowCreateNewScenarioModalBtnClick = (showCreateNewScenarioModal) => {
        this.setState({showCreateNewScenarioModal: showCreateNewScenarioModal})
    }

    handleShowCreateNodesTreeModalBtnClick = (showCreateNodesTreeModal) => {
        this.setState({showCreateNodesTreeModal: showCreateNodesTreeModal})
    }

    render() {
        return (
            <React.Fragment>
                <Container fixed>
                <AppBar handleShowCreateNewScenarioModalBtnClick={this.handleShowCreateNewScenarioModalBtnClick}/>
                <Search />
                <DropDownListContainer />
                <ScenariosContainer />
                {/* <ShowScenario /> */}
                {/*{this.state.showCreateNewScenarioModal && <CreateNewScenario handleShowCreateNewScenarioModalBtnClick={this.handleShowCreateNewScenarioModalBtnClick}/> }*/}
                {this.state.showCreateNewScenarioModal &&
                    <CreateScenarioModal
                        showCreateNewScenarioModal={this.state.showCreateNewScenarioModal}
                        showCreateNodesTreeModal={this.state.showCreateNodesTreeModal}
                        handleShowCreateNewScenarioModalBtnClick={this.handleShowCreateNewScenarioModalBtnClick}
                        handleShowCreateNodesTreeModalBtnClick={this.handleShowCreateNodesTreeModalBtnClick}
                    />
                }
                </Container>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => {
    // test
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);