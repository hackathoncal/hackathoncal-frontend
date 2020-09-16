import * as React from 'react';
import './scenario.scss';


class Option extends React.Component{

    optionText = this.props.text || '';

    state = {
        id: '',
        text: '',
        next_node_id: null,
    }

    handleChange = (e) => {
        this.setState({ text: e.target.value })
    }

    render() {

        return (
            <div className={'option-div'}>
                <button className={'button text-btn'} onChange={this.handleChange}>{this.optionText}</button>
                <button className={'button edit-btn'}>Edit</button>
                <button className={'button delete-btn'} onClick={this.props.handleDelete}>Delete</button>
                <button className={'button next-btn'}>Create next node (optional)></button>
            </div>
        )
    }
}

export default Option;