import * as React from 'react';
import Option from "./Option";
import SimpleModal from './SimpleModal'
import './scenario.scss';

class AddNewScenario extends React.Component {

    options = {
        id: '',
        text: '',
        next_node_id: null,
    };

    state = {
        id: '',
        text: '',
        options: [],
    }

    handleOK = () => {
        console.log('handling ok')
    }

    render() {

        return (
            <div className={'main-div'}>
                <textarea className={'txt-field textarea'}>{this.state.text}</textarea>
                <br/>
                <div id={"options-id"} className={'txt-field'}>
                    <Option/>
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