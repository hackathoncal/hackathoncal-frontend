import * as React from 'react';
import Button from '@material-ui/core/Button';
import './scenario.scss';


class Option extends React.Component{

    optionText = this.props.text || '';

    // state = {
    //     id: '',
    //     text: '',
    //     next_node_id: null,
    // }
    //
    // handleChange = (e) => {
    //     this.setState({ text: e.target.value })
    // }

    render() {

        return (
            <div className={'option-div'}>
                <Button className={'button text-btn'} variant={"contained"} onClick={()=>{}}>{this.optionText}</Button>
                <button className={'button edit-btn'} variant={"contained"} onClick={()=>{}} color="primary" >Edit</button>
                <button className={'button delete-btn'} variant={"contained"} onClick={(e, index)=>this.props.handleDelete(e, index)} color="secondary">Delete</button>
                <button className={'button next-btn'}>Create next node></button>
            </div>
        )
    }
}

export default Option;