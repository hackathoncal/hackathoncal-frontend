import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import './SimpleModal.scss'

export default function SimpleModal(props) {
    const [modalStyle] = React.useState();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={'modal-main-div'}>
            <h4 id="simple-modal-title">Add Option</h4>
            <div className={'modal-div'}>
                <form onSubmit={()=>props.handleOK()}>
                    <label className={'modal-label'}>Text:</label>
                    <input className={'modal-text'}/>
                    <button className={'button save-btn'}>Save</button>
                </form>
            </div>

        </div>
    );

    return (
        <div>
            <button className={'button txt-field add'} onClick={handleOpen}>{props.text}</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}
