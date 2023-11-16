import {Modal} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import CloseIcon from '@mui/icons-material/Close';
import {Grid} from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 15,
};

export default function BasicModal(props) {

    const {open, handleClose} = props;

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <CloseIcon
                    sx={{bgcolor: 'rgb(1,24,86)', color: 'white', borderRadius: 1.5, padding: 0.3, cursor: 'pointer'}}
                    onClick={handleClose}/>
                <Box id="modal-modal-title" sx={
                    {
                        width: 'fit-content',
                        margin: 'auto',
                        borderBottom: 3,
                        borderBottomColor: '#E4E4E4',
                        paddingBottom: 10,
                        marginBottom: 4,
                        borderBottomStyle: 'solid'
                    }}>
                    <Typography variant="h5" component="h3" align={'center'}>
                        Document Upload
                    </Typography>
                </Box>
                <Typography id="modal-modal-description" sx={{mt: 2}}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula Duis mollis, est non commodo luctus,
                    nisi erat porttitor ligula.
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    .
                </Typography>
            </Box>
        </Modal>
    );
}
