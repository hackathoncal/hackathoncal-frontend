import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function SimpleSelect() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div>

            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-helper-label">Categories</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={age}
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Recipe setup</MenuItem>
                    <MenuItem value={20}>Platform</MenuItem>
                    <MenuItem value={30}>Development</MenuItem>
                    <MenuItem value={30}>Calibrations</MenuItem>
                    <MenuItem value={30}>Fab Setup</MenuItem>
                    <MenuItem value={30}>IP</MenuItem>
                    <MenuItem value={30}>PM</MenuItem>
                </Select>
                {/*<FormHelperText>Some important helper text</FormHelperText>*/}
            </FormControl>
        </div>
    );
}