import * as React from 'react';
import SimpleModal from './SimpleModal'
import './scenario.scss';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const OPTION_STATE = {
        id: '',
        text: '',
        next_node_id: null,
    }

class CreateNodesTree extends React.Component {

    state = {
        id: '',
        text: "Can't lunch simulation",
        options: [],
        tmpText: "",
        idCounter: 0,
    }

    handleOK = (e) => {
        e.preventDefault();

        const id = this.state.idCounter + 1;
        const newOption = {
            id: id,
            text: this.state.tmpText,
            next_node_id: null,
        };

        this.setState({ options: [...this.state.options, newOption]});
        this.setState({ idCounter: id })

    };

    createNewOption = (props, index) => {
        const optionText = props.text || '';
        return (
            <div className={'option-div'} key={index}>
                <Button variant={"contained"} className={'button text-btn'}>{optionText}</Button>
                <button className={'button edit-btn'}>Edit</button>
                <button className={'button delete-btn'} onClick={(e)=>this.handleDelete(e, props.id)}>Delete</button>
                <button className={'button next-btn'}>Create next node (optional)></button>
            </div>
        )
    };

    handleDelete = (e, id) => {
        const ops = this.state.options.filter((ops) => {
            return ops.id !== id
        });
        this.setState({ options: ops });
    };

    handleInputChange = (e) => {
        this.setState({ tmpText: e.target.value });
    };

    scenariosList = (options) => {
        const allOptions = options.map((opt, index) => {
            return this.createNewOption(opt, index)
        });
        return  (
            <div>{allOptions}</div>
        )
    };

    render() {

        return (
            <Container maxWidth={"md"} className={"main-div"}>
                <textarea className={'txt-field textarea'}>{this.state.text}</textarea>
                <br/>
                <div className={"options-id"}>
                    {this.scenariosList(this.state.options)}
                </div>
                <SimpleModal
                    open={false}
                    text={"+"}
                    handleOK={this.handleOK}
                    handleInputChange={(e)=>this.handleInputChange(e)}/>
                <div>
                    <div className={'footer'}>
                        <Button variant={"contained"} color={"secondary"} size={"small"}>Cancel</Button>
                        <Button variant={"contained"} color={"primary"} size={"small"}>Save</Button>

                    </div>
                </div>
            </Container>
        )
    }
}

export default CreateNodesTree;