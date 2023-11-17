import {
    FormControl,
    FormControlLabel, FormGroup,
    FormLabel,
    Grid,
    InputLabel,
    MenuItem,
    Radio,
    RadioGroup,
    Select, Stack, styled, Switch
} from "@mui/material";
import React, {useState} from "react";
import {Button} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import {SwitchProps} from "@mui/material";
import Basic from "../Dropzone/Dropzone";

export default function UploadForm() {
    function handleSubmit(event) {
        event.preventDefault();
    }

    const [age, setAge] = useState('');
    const [client, setClient] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const IOSSwitch = styled((props: SwitchProps) => (
        <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
    ))(({ theme }) => ({
        width: 42,
        height: 26,
        padding: 0,
        '& .MuiSwitch-switchBase': {
            padding: 0,
            margin: 2,
            transitionDuration: '300ms',
            '&.Mui-checked': {
                transform: 'translateX(16px)',
                color: '#fff',
                '& + .MuiSwitch-track': {
                    backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : 'rgb(1,24,86)',
                    opacity: 1,
                    border: 0,
                },
                '&.Mui-disabled + .MuiSwitch-track': {
                    opacity: 0.5,
                },
            },
            '&.Mui-focusVisible .MuiSwitch-thumb': {
                color: '#33cf4d',
                border: '6px solid #fff',
            },
            '&.Mui-disabled .MuiSwitch-thumb': {
                color:
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[600],
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
            },
        },
        '& .MuiSwitch-thumb': {
            boxSizing: 'border-box',
            width: 22,
            height: 22,
        },
        '& .MuiSwitch-track': {
            borderRadius: 26 / 2,
            backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
            opacity: 1,
            transition: theme.transitions.create(['background-color'], {
                duration: 500,
            }),
        },
    }));

    return (
        <form onSubmit={handleSubmit} sx={{flexGrow: 1}}>
            <Grid container rowSpacing={2} columnSpacing={6} maxWidth={'90%'} margin={'auto'}>
                <Grid xs={7} item={true}>
                    {/*Select Name*/}
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Select Import Name:</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Select Import Name:"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    {/*File Dropzone*/}
                    <Box sx={{
                        marginTop: '20px',
                        borderTop: '2px solid #E4E4E4',
                        paddingTop: '20px',
                        paddingBottom: '20px',
                        width: 'fit-content'
                    }}>
                        <Typography variant="subtitle1" component="h2" style={{fontWeight: 600}}>
                            Select a manifest you'd like to import
                        </Typography>
                    </Box>
                    <Box sx={{border: '2px solid #E4E4E4', padding: '60px 40px', borderRadius: '8px', position: 'relative'}}>
                        <Basic/>
                    </Box>
                    {/*Data Checking*/}
                    <Box sx={{
                        marginTop: '100px',
                        marginBottom: '20px',
                        borderTop: '2px solid #E4E4E4',
                        borderBottom: '2px solid #E4E4E4',
                        paddingTop: '20px',
                        paddingBottom: '20px',
                        width: 'fit-content'
                    }}>
                        <Typography variant="subtitle1" component="h2" style={{fontWeight: 600}}>
                            Elapse Data Checking:
                        </Typography>
                        <Typography variant="subtitle1" component="h2" style={{color: '#65AD80', fontWeight: 600}}>
                            No Elapsed Dates!
                        </Typography>
                    </Box>
                    {/*Tolerance*/}
                    <FormLabel component="legend">Tolerance Window:</FormLabel>
                    <Stack direction={'row'} sx={{display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
                        <FormGroup sx={{width: 'fit-content', borderRight: '2px solid #E4E4E4', marginRight: '20px'}}>
                            <FormControlLabel
                                control={
                                    <IOSSwitch sx={{m: 1}} name="Toggle ON" defaultChecked/>
                                }
                                label="Toggle ON"
                            />
                        </FormGroup>
                        <AccessTimeOutlinedIcon/>
                        <Typography variant="subtitle1" style={{marginLeft: '10px'}}>
                            Select Tolerance Level
                        </Typography>
                    </Stack>
                </Grid>
                <Grid xs={5} item={true}>
                    {/*schedule*/}
                    <FormControl sx={{borderBottom: '2px solid #E4E4E4', paddingBottom: '20px'}}>
                        <FormLabel id="demo-row-radio-buttons-group-label">Split schedule using social
                            distancing?</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="y" control={<Radio/>} label="Yes"/>
                            <FormControlLabel value="n" control={<Radio/>} label="No"/>
                        </RadioGroup>
                    </FormControl>
                    {/*Location*/}
                    <Box sx={{marginTop: '20px', borderBottom: '2px solid #E4E4E4', paddingBottom: '20px'}}>
                        <Typography variant="subtitle1" component="h2" style={{fontWeight: 600}}>
                            Location Checking:
                        </Typography>
                        <Typography variant="subtitle1" component="h2" style={{color: '#65AD80', fontWeight: 600}}>
                            All Available!
                        </Typography>
                    </Box>
                    {/*  Client  */}
                    <FormControl sx={{marginTop: '20px', paddingBottom: '20px'}}>
                        <FormLabel id="demo-row-radio-buttons-group-label">Client:</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="s" control={<Radio/>} label="Single"/>
                            <FormControlLabel value="m" control={<Radio/>} label="Multiple"/>
                        </RadioGroup>
                    </FormControl>
                    {/*  Center(s)  */}
                    <Stack direction="row" spacing={2}
                           sx={{display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
                        <Typography variant="subtitle1" style={{fontWeight: 600, marginRight: '20px'}}>
                            Testing Center 1
                        </Typography>
                        <FormControl sx={{width: '150px'}}>
                            <InputLabel id="demo-simple-select-label">Select Client</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Select Client"
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Client 1</MenuItem>
                                <MenuItem value={20}>Client 2</MenuItem>
                                <MenuItem value={30}>Client 3</MenuItem>
                            </Select>
                        </FormControl>
                        <AccessTimeOutlinedIcon/>
                    </Stack>
                    <Stack direction="row" spacing={2}
                           sx={{display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
                        <Typography variant="subtitle1" style={{fontWeight: 600, marginRight: '20px'}}>
                            Testing Center 2
                        </Typography>
                        <FormControl sx={{width: '150px'}}>
                            <InputLabel id="demo-simple-select-label">Select Client</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Select Client"
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Client 1</MenuItem>
                                <MenuItem value={20}>Client 2</MenuItem>
                                <MenuItem value={30}>Client 3</MenuItem>
                            </Select>
                        </FormControl>
                        <AccessTimeOutlinedIcon/>
                    </Stack>
                    <Stack direction="row" spacing={2}
                           sx={{display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
                        <Typography variant="subtitle1" style={{fontWeight: 600, marginRight: '20px'}}>
                            Testing Center 3
                        </Typography>
                        <FormControl sx={{width: '150px'}}>
                            <InputLabel id="demo-simple-select-label">Select Client</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Select Client"
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Client 1</MenuItem>
                                <MenuItem value={20}>Client 2</MenuItem>
                                <MenuItem value={30}>Client 3</MenuItem>
                            </Select>
                        </FormControl>
                        <AccessTimeOutlinedIcon/>
                    </Stack>
                    <Stack direction="row" spacing={2}
                           sx={{display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
                        <Typography variant="subtitle1" style={{fontWeight: 600, marginRight: '20px'}}>
                            Testing Center 4
                        </Typography>
                        <FormControl sx={{width: '150px'}}>
                            <InputLabel id="demo-simple-select-label">Select Client</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Select Client"
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Client 1</MenuItem>
                                <MenuItem value={20}>Client 2</MenuItem>
                                <MenuItem value={30}>Client 3</MenuItem>
                            </Select>
                        </FormControl>
                        <AccessTimeOutlinedIcon/>
                    </Stack>
                </Grid>
            </Grid>
        </form>
    );
};