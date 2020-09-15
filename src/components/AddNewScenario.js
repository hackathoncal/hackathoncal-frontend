import * as React from 'react';
import Option from "./Option";
import SimpleModal from './SimpleModal'
import './scenario.scss';


class AddNewScenario extends React.Component {

    state = {
        id: '',
        text: "Can't lunch simulation",
        options: [],
    }

    handleOK = (e) => {
        e.preventDefault();

        const ops = [...this.state.options];
        const id = ops.length === 0 ? 1 : ops.length + 1; // id should come from BE
        const newOption = {
            id: id,
            text: e.target.elements[0].value,
            next_node_id: null,
        };

        this.setState({ options: [...this.state.options, newOption]})

    }

    handleDelete = (e) => {
        console.log(e.target);
    }

    scenariosList = (options) => {
        const allOptions = options.map((opt, index) => {
            return <Option text={opt.text} key={index} handleDelete={(e)=>this.handleDelete(e)}/>
        })
        return  (
            <div>{allOptions}</div>
        )
    }

    render() {

        return (
            <div className={'main-div'}>
                <textarea className={'txt-field textarea'}>{this.state.text}</textarea>
                <br/>
                <div className={"options-id"}>
                    {this.scenariosList(this.state.options)}
                </div>
                <SimpleModal
                    open={false}
                    text={"+"}
                    handleOK={this.handleOK}
                    state={this.state}/>
                <div>
                    <div className={'footer'}>
                        <button className={'button cancel-btn'}>Cancel</button>
                        <button className={'button save-btn'}>Save</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddNewScenario;