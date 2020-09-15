import React, { Component } from "react";
import { addOne, subtractOne } from "../redux/actions/counterAction.js";
import { connect } from "react-redux";
import ShowScenario from "./showScenario";
import "./Main.scss";
import AddNewScenario from "./AddNewScenario";

class Main extends Component {

    render() {
        return (
            <React.Fragment>
                <div>
                    <AddNewScenario/>
                </div>
                {/*<ShowScenario />*/}
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