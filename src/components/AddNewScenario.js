import * as React from 'react';
import Option from "./Option";
import './scenario.scss';

const AddNewScenario = () => {

    const handleAddNew = () => {
        console.log('adding new');
    }

    return(
        <div className={'main-div'}>
            <textarea className={'txt-field textarea'}/>
            <br/>
            <div id={"options-id"} className={'txt-field'}/>
            <button className={'button txt-field add'} onClick={handleAddNew}>+</button>
            <div>
                <div className={'footer'}>
                    <button className={'button cancel-btn'}>Cancel</button>
                    <button className={'button save-btn'}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default AddNewScenario;