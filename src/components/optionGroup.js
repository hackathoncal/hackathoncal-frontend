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

    const { options, selectOption, updatePreviousIDs, url } = props;
    console.log(options);

    const handleClick = id => {
        if (url === null) {
            selectOption(id);
            updatePreviousIDs(id);
        } else {
            console.log(url);
            window.open(url,'_blank');
        }
        
    }

    return (
        <div className={classes.root}>
            <ButtonGroup color="secondary" aria-label="outlined secondary button group">
                {options.map((item, index) => {
                    return (
                        <Button
                            key={index}
                            onClick={() => handleClick(item.next_node)}>
                            {item.text}
                        </Button>
                    )
                })}

            </ButtonGroup>
        </div>
    );
}
