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

        // scenario.active_node = firstNode;
        console.log(firstNode);
        // return scenario

        const handleAddNew = () => {
            console.log('adding new');
        }
        console.log('Scenario1:', scenario1.name)
    
        return(
            <div>
                <h1>{scenario.name}</h1>
                <div className={'main-div'}>
                    <textarea className={'txt-field textarea'}>{firstNode.text}</textarea>
                    <br/>
                    

                    <div className={'option-div'}>
                        <div>
                        {firstNode.options.map((item, index) => {
                            return(
                                <div>
                                    <button className={'button txt-field'}>{item.text}</button>
                                    <button className={'button edit-btn'}>Edit</button>
                                    <button className={'button delete-btn'}>Delete</button>
                                    <button className={'button next-btn'}>Create next node</button>
                                </div>
                            )})
                        }
                    </div>
                </div>
                <button className={'button txt-field add'} onClick={handleAddNew}>+</button>
                    
                </div>

                <div>
                    <div className={'footer'}>
                        <button className={'button cancel-btn'}>Cancel</button>
                        <button className={'button save-btn'}>Save</button>
                    </div>
                </div>
            </div>
        )

        // return (
        //     <>
        //         <div>
        //             <div>{scenario.name}</div>
        //             <div>
        //                 {firstNode.text}
        //             </div>
        //             {firstNode.options.map((item, index) => {
        //                 return(
        //                     <div key={index}>
        //                         {item.text}
        //                     </div>
        //                 )

        //             } )}
        //         </div>
        //     </>
        // );
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