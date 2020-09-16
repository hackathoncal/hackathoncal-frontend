import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input'
import './SimpleModal.scss'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function SimpleModal(props) {

    const classes = useStyles();
    const [modalStyle] = React.useState();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (e) => {
        handleClose();
        props.handleOK(e);
    }

    const body = (
        <div style={modalStyle} className={'modal-main-div'}>
            <h4 id="simple-modal-title">Add Option</h4>
            <div className={'modal-div'}>
                <form className={classes.root} >
                    <label className={'modal-label'}>Text:</label>
                    <Input  className={'modal-text'} autoFocus={true} onChange={props.handleInputChange}/>
                    <Button variant={"contained"} color={"primary"} size={"small"} className={'button save-btn'} onClick={(e)=>handleSubmit(e)}>Save</Button>
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
