import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import './SimpleModal.scss'
import TextField from "@material-ui/core/TextField";
import DropDownListContainer from "./drop-downs/DropDownListContainer";

export default function CreateScenarioModal(props) {
    const [modalStyle] = React.useState();
    const [open, setOpen] = React.useState(props.showCreateNewScenarioModal);

    const handleOpen = () => {
        // setOpen(true);
    };

    const handleClose = () => {
        props.handleShowCreateNewScenarioModalBtnClick(false);
        // setOpen(false);
    };

    const handleSave = () => {
        // API call
        alert('save');
        handleClose();
    }

    const handleCreateNodes = () => {
        // render CreateNodes component
        alert("create nodes");
    }

    const body = (
        <div style={modalStyle} className={'modal-main-div'}>
            <h4 id="simple-modal-title">Add New Scenario</h4>
            <div className={'modal-div'}>
                <form noValidate autoComplete="off">
                    <TextField id="outlined-search" label="Name" type="search" variant="outlined" />
                    <TextField id="outlined-search" label="Description" type="search" variant="outlined" />
                    <DropDownListContainer />
                </form>
                <button onClick={handleCreateNodes}>Create nodes tree</button>
                <button onClick={handleSave}>Save</button>
                <button onClick={handleClose}>Cancel</button>
            </div>
        </div>
    );

    return (
        <div>
            <Modal
                open={props.showCreateNewScenarioModal}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}
