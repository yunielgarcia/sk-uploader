import React, {useMemo} from 'react';
import {useDropzone} from 'react-dropzone';
import Box from "@material-ui/core/Box";
import DescriptionIcon from '@mui/icons-material/Description';
import {Button} from "@material-ui/core";
import {Stack} from "@mui/material";

export default function Basic(props) {
    const baseStyle = {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        borderWidth: 2,
        borderRadius: 2,
        borderColor: '#eeeeee',
        borderStyle: 'dashed',
        backgroundColor: '#fafafa',
        color: '#bdbdbd',
        outline: 'none',
        transition: 'border .24s ease-in-out'
    };

    const focusedStyle = {
        borderColor: '#2196f3'
    };

    const acceptStyle = {
        borderColor: '#00e676'
    };

    const rejectStyle = {
        borderColor: '#ff1744'
    };
    const {
        getRootProps,
        getInputProps,
        isFocused,
        isDragAccept,
        isDragReject,
        acceptedFiles,
        open
    } = useDropzone({accept: {'image/*': []}, noClick: true});

    const style = useMemo(() => ({
        ...baseStyle,
        ...(isFocused ? focusedStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }), [
        isFocused,
        isDragAccept,
        isDragReject
    ]);

    const files = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    return (
        <Box className="container">
            <Box {...getRootProps({style})}>
                <input {...getInputProps()} />
                <DescriptionIcon/>
                <Box sx={{marginTop: 10}}>Drag & Drop Here Or <strong>Browse</strong> </Box>
                <Button onClick={open}
                        style={{
                            position: 'absolute',
                            bottom: '5px',
                            backgroundColor: 'rgb(1,24,86)', color: '#fff'}}>Upload Manifest</Button>
            </Box>
            <Stack direction={'row'}
                   sx={{position: 'absolute',
                       padding: '20px',
                       bottom: '-90px',
                       left: '0',
                       borderBottom: '2px solid #E4E4E4',
                       borderTop: '2px solid #E4E4E4'}}>
                <DescriptionIcon/>
                <Box>{files}</Box>
            </Stack>
        </Box>
    );
}