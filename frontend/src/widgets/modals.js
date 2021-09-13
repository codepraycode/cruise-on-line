import React,{useState} from 'react';
import { makeStyles,Modal,Backdrop,Fade } from '@material-ui/core';

const userStyles = makeStyles((theme)=>({
    modal:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    paper:{
        backgroundColor:theme.palette.background.paper,
        border:'2px solid #000',
        boxShadow:theme.shadows[5],
        padding:theme.spacing(2,4,3),
    },
}));



const Modals = (props)=>{
    const [open,setOpen]= useState(false);

    const handleOpen = ()=>{
        setOpen(true);
    }

    const handleClose = ()=>{
        setOpen(false);
    }

    return(
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout:500,
            }}
        >
            {props.children}
        </Modal>
    )
}

export default Modals;