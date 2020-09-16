import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import './SimpleModal.scss';
import TextField from "@material-ui/core/TextField";
import DropDownListContainer from "./drop-downs/DropDownListContainer";
import Button from '@material-ui/core/Button';
import CreateNodesTree from "./CreateNodesTree";
import Container from "@material-ui/core/Container";
// import "./CreateScenarioModal.css";


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
        props.handleShowCreateNodesTreeModalBtnClick(true);
    }

    const body = (
        <div style={modalStyle} className={'modal-main-div'}>
            <h4 className="simple-modal-title" id="simple-modal-title">Add New Scenario</h4>
            <div className={'modal-div'}>
                {/* <form noValidate autoComplete="off"> */}
                    <TextField id="outlined-search" label="Name" type="search" variant="outlined" />
                    <br/>
                    <TextField id="outlined-search" label="Description" type="search" variant="outlined" />
                    <DropDownListContainer />
                    <br/>
                {/* </form> */}
                {/* <div className={'createButton'}> */}
                <div className='create-button'>
                <Button
                        onClick={handleCreateNodes}
                        variant="contained" 
                        color="primary">
                            Create nodes tree     
                </Button>
                </div>
                <br/>
                {props.showCreateNodesTreeModal &&
                <CreateNodesTree
                    showCreateNodesTreeModal={props.showCreateNodesTreeModal}
                    handleShowCreateNodesTreeModalBtnClick={props.handleShowCreateNodesTreeModalBtnClick}
                /> }
                <br/>
                <div className='save-cancel-button'>
                    <Button className="save-cancel-button" 
                            // size="small" 
                            variant="contained" 
                            color="primary" 
                            onClick={handleSave}>
                                Save
                    </Button>
                    <Button 
                            className="save-cancel-button" 
                            // size="small" 
                            variant="contained" 
                            color="secondary" 
                            onClick={handleClose}>
                                Cancel
                    </Button>
                </div>
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
