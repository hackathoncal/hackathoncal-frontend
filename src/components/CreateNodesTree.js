import * as React from 'react';
import Option from "./Option";
import SimpleModal from './SimpleModal'
import './scenario.scss';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';


class CreateNodesTree extends React.Component {

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

    handleInputChange = (e) => {
        this.setState()
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