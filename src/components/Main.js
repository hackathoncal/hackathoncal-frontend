import React, { Component } from "react";
import { addOne, subtractOne } from "../redux/actions/counterAction.js";
import { connect } from "react-redux";
import ShowScenario from "./showScenario";
import "./Main.scss";
import AddNewScenario from "./AddNewScenario";
import Option from "./Option";
import AppBar from "../components/app-bar/AppBar";
import Search from "../components/search/Search";
import ScenarioList from "../components/scenarios-list/ScenarioList";
import Dropdown from "../components/drop-downs/Dropdown";

class Main extends Component {

    render() {
        return (
            <React.Fragment>
                <div>
                    {/* {AddNewScenario(ShowScenario)}
                    {Option()} */}
                </div>
                <AppBar />
                <Search />
                <Dropdown />
                <ScenarioList />
                <ShowScenario />
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