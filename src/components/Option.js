import * as React from 'react';
import './scenario.scss';


const Option = () => {

    return(
        <div className={'option-div'}>
            <button className={'button txt-field'}/>
            <button className={'button edit-btn'}>Edit</button>
            <button className={'button delete-btn'}>Delete</button>
            <button className={'button next-btn'}>Create next node (optional)></button>
        </div>
    )
}

export default Option;