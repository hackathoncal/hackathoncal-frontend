import React, { Component } from "react";
import { addOne, subtractOne } from "../redux/actions/counterAction.js";
import { connect } from "react-redux";
import { scenario1, nodes } from "./constants";

// import "./Main.scss";

class ShowScenario extends Component {

    render() {
        // let { scenario } = this.props.selectedScenario;
        const scenario = scenario1;
        const firstNode = nodes.filter(item => item.id === scenario.first_node)[0];
        console.log(firstNode);
        return (
            <>
                <div>
                    <div>{scenario.name}</div>
                    <div>
                        {firstNode.text}
                    </div>
                    {firstNode.options.map((item, index) => {
                        return(
                            <div key={index}>
                                {item.text}
                            </div>
                        )

                    } )}
                </div>
            </>
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

export default connect(mapStateToProps, mapDispatchToProps)(ShowScenario);