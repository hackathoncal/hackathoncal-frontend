import React, { Component } from "react";

import { connect } from "react-redux";
// import "./createNewScenarioModal.css";

import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

class CreateNewScenario extends Component {

    state = {
        scenario: {
            name: "",
            description: "",
            tags: [],
            category: "",
            firstNodeId: null
        }
    }

    getFirstNodeId = (id) => {
        this.setState({"scenario": { ...this.state.scenario, "firstNodeId": id }});
    }

    handleFieldChange = (fieldName, data) => {
        this.setState({fieldName: data})
    }

    handleSaveNewScenario = () => {
        alert("save")
        // api call with the state (scenario interface)
    }

    handleCreateNodesTree = () => {
        this.getFirstNodeId(1) // suppose to run in createNodesTree component
        alert("connect to  create component")
        //  connect to createNodesTree component
    }

    handleCancel = () => {
        this.props.handleShowCreateNewScenarioModalBtnClick(false)
    }

    render() {

        return (
            <React.Fragment>
                <form noValidate autoComplete="off">
                    <TextField onChange={(data) => this.handleFieldChange("name", data)} id="outlined-search" label="Name" type="search" variant="outlined" />
                    <TextField onChange={(data) => this.handleFieldChange("description", data)}id="outlined-search" label="Description" type="search" variant="outlined" />
                </form>
                <button onClick={this.handleCreateNodesTree}>Create nodes tree</button>
                <button onClick={this.handleSaveNewScenario}>Save</button>
                <button onClick={this.handleCancel}>Cancel</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewScenario);
