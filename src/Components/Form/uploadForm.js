import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    InputLabel,
    MenuItem,
    Radio,
    RadioGroup,
    Select, Stack
} from "@mui/material";
import {useState} from "react";
import {Button} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

export default function UploadForm() {
    function handleSubmit(event) {
        event.preventDefault();
    }

    const [age, setAge] = useState('');
    const [client, setClient] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <form onSubmit={handleSubmit} sx={{flexGrow: 1}}>
            <Grid container rowSpacing={2} columnSpacing={10} maxWidth={'90%'} margin={'auto'}>
                <Grid xs={7} item={true}>
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
                    <Stack direction="row" spacing={2} sx={{display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
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
                    <Stack direction="row" spacing={2} sx={{display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
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
                    <Stack direction="row" spacing={2} sx={{display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
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
                    <Stack direction="row" spacing={2} sx={{display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
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


                    <Stack direction="row" spacing={2} sx={{display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
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
                    <Stack direction="row" spacing={2} sx={{display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
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
                    <Stack direction="row" spacing={2} sx={{display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
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
                    <Stack direction="row" spacing={2} sx={{display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
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
                <Grid item={true} container justifyContent={'center'} xs={6}>
                    <Button variant={'outlined'}>Continue Import</Button>
                    <Button variant={'outlined'}>Cancel</Button>
                </Grid>
            </Grid>

        </form>
    );
};