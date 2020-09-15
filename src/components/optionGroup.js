import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function OptionsButtons(props) {
    const classes = useStyles();

    const { options, selectOption } = props;
    console.log(options);

    return (
        <div className={classes.root}>
            <ButtonGroup color="secondary" aria-label="outlined secondary button group">
                {options.map(item => {
                    return (
                        <Button
                            onClick={() => selectOption(item.next_node)}>
                            {item.text}
                        </Button>
                    )
                })}

            </ButtonGroup>
        </div>
    );
}
