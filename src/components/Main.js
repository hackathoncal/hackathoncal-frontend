import React, { Component } from "react";
import { addOne, subtractOne } from "../redux/actions/counterAction.js";
import { connect } from "react-redux";
import ShowScenario from "./showScenario";
import "./Main.scss";
import CreateNewScenarioModal from "./createNewScenarioModal";

class Main extends Component {

    render() {
        let { count } = this.props.counter;
        return (
            <React.Fragment>
                <div className="cover counter">
                    <div>Cal Hackathon counter: {count}</div>
                    <div>
                        <button onClick={() => this.props.addOneToCounter(count)}>
                            Add one
                        </button>
                    </div>
                    <div>
                        <button onClick={() => this.props.subtractOneFromCounter(count)}>
                            Subtract one
                        </button>
                    </div>
                </div>
                <ShowScenario />
                <CreateNewScenarioModal />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    counter: state.counter
});

const mapDispatchToProps = (dispatch) => {
    return {
        addOneToCounter: (num) => dispatch(addOne(num)),
        subtractOneFromCounter: (num) => dispatch(subtractOne(num))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);