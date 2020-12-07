import React,{useState} from 'react'

import Button  from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const IntroButtons =()=>{


    

    const [number, saetNumber]=useState(0);

    const sumar=()=>{
      saetNumber(
        number+1
      )
      console.log(number);
    }
  
    const useStyles = makeStyles((theme) => ({
      modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
    }));
  
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  

    return(

        <div>
            
            <h1> {number}</h1>
            <Button color="primary" variant="contained" onClick={()=>sumar(1)}>
            material ui - btn sumar:
            </Button>
            

            <Button color="primary" variant="contained" style={{background:"green", marginLeft:"5px"}} onClick={()=>saetNumber(number-1)}>
                material ui - btn restar:
            </Button>


            <div>
            <button type="button" onClick={handleOpen}>
                react-transition-group
            </button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
            
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={open}>
                <div className={classes.paper}>

                    <h2 id="transition-modal-title">Transition modal</h2>
                    <p id="transition-modal-description">react-transition-group animates me.</p>
                    <Button onClick={()=>saetNumber(number+2)}>
                    incremetart 
                    </Button>
                </div>
                </Fade>
            </Modal>
            </div>
        </div>
    );

}


export default IntroButtons;