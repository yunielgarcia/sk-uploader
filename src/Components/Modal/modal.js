import {Button, Modal} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import CloseIcon from '@mui/icons-material/Close';
import UploadForm from "../Form/uploadForm";
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    IconButton,
    TextField
} from "@mui/material";

export default function BasicModal(props) {

    const {open, handleClose} = props;

    return (
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth={'lg'}>
            <DialogTitle sx={{
                color: '#011856',
                fontSize: '30px',
                fontWeight: '600',
                alignSelf: 'center',
                width: 'fit-content',
                margin: 'auto',
                textAlign: 'center',
                paddingBottom: '20px',
                borderBottomStyle: 'solid',
                borderBottom: 2,
                borderBottomColor: '#E4E4E4',
                marginBottom: 2,
            }}>Document Upload</DialogTitle>
            <CloseIcon sx={{
                bgcolor: 'rgb(1,24,86)',
                color: 'white',
                borderRadius: 1.5,
                padding: 0.3,
                width: '35px',
                height: '35px',
                position: 'absolute',
                top: '25px', left: '25px', cursor: 'pointer'
            }} onClick={handleClose}/>
            <DialogContent>
                <UploadForm/>
            </DialogContent>
            <DialogActions
                sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'space-betwen'}}>
                <Typography variant={'h6'} style={{fontWeight: 600, marginBottom: '10px', color: '#011856',}}>Data in the import file is correct. Please press Continue to import.</Typography>
                <Box>
                    <Button
                        style={{
                            textTransform: 'capitalize',
                            backgroundColor: 'rgb(1,24,86)',
                            color: '#fff',
                            width: '200px',
                            height: '40px'}} onClick={handleClose}>
                        Continue Import
                    </Button>
                    <Button
                        variant={'outlined'}
                        style={{
                            textTransform: 'capitalize',
                            width: '200px',
                            height: '40px',
                            borderColor: '#EFA130',
                            color: '#EFA130'
                    }} onClick={handleClose}>Cancel</Button>
                </Box>

            </DialogActions>
        </Dialog>
    );
}
