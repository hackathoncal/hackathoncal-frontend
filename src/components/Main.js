import React, { Component } from "react";
import { addOne, subtractOne } from "../redux/actions/counterAction.js";
import { connect } from "react-redux";
import "./Main.scss";
import AddNewScenario from "./AddNewScenario";
import Option from "./Option";

class Main extends Component {

    render() {
        return (
            <React.Fragment>
                <div>
                    {AddNewScenario()}
                    {Option()}
                </div>
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