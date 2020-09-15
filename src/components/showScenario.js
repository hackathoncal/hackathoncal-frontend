import React, { Component } from "react";
import { addOne, subtractOne } from "../redux/actions/counterAction.js";
import { connect } from "react-redux";
import { scenario1, nodes } from "./constants";
import VerticalLinearStepper from "./stepperMenu";

// import "./Main.scss";

function getSteps() {
    return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
  }
  
  function getStepContent(step) {
    switch (step) {
      case 0:
        return `For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.`;
      case 1:
        return 'An ad group contains one or more ads which target a shared set of keywords.';
      case 2:
        return `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`;
      default:
        return 'Unknown step';
    }
  }

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
                    <VerticalLinearStepper getSteps={getSteps} getStepContent={(id) => getStepContent(id)} />
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