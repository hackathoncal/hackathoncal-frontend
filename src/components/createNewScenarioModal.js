import React, { Component } from "react";

import { connect } from "react-redux";
// import "./createNewScenarioModal.scss";

class CreateNewScenarioModal extends Component {
    state = {
        scenario: {
            name: "",
            description: "",
            tags: [],
            category: "",
            owners: [],
            firstNodeId: null
        }
    }

    getFirstNodeId = (id) => {
        this.setState({"scenario": { ...this.state.scenario, "firstNodeId": id }});
    }

    render() {
        return (
            <React.Fragment>
                <div className="formContainer">
                    <label htmlFor="name">Name:<input id="name" type="text" placeholder="please enter scenario name"/></label>
                    <label htmlFor="description">Name:<input id="description" type="text" placeholder="please enter scenario description"/></label>
                    <label htmlFor="tags">Name:<input id="tags" type="text" placeholder="please enter scenario tags"/></label>
                    <label htmlFor="category">Name:<input id="category" type="text" placeholder="please enter scenario category"/></label>
                    <label htmlFor="owners">Name:<input id="owners" type="text" placeholder="please enter scenario owners"/></label>
                </div>
                <button>Create nodes tree</button>
                <button>Save</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewScenarioModal);