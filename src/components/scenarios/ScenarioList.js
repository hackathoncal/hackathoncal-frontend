import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function ScenarioList() {
    const classes = useStyles();

    return (
        <List component="nav" className={classes.root} aria-label="contacts">
            <ListItem button>
                <StarIcon />
                <ListItemText inset primary='gitw flow push.topic failed with "Error 14""' />
            </ListItem>
            <ListItem button>
                <StarIcon />
                <ListItemText inset primary="Can't run gradle build from my local work tree" />
            </ListItem>
            <ListItem button>
                <StarIcon />
                <ListItemText inset primary="Power up fails: can't pass powerup" />
            </ListItem>
            <ListItem button>
                <StarIcon />
                <ListItemText inset primary="How to configure java JDK right version on my local environment" />
            </ListItem>
            <ListItem button>
                <StarIcon />
                <ListItemText inset primary='"bs2 bft" failed' />
            </ListItem>
        </List>
    );
}