import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';


const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function SimpleCard(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const { text, learnMore } = props;

    const learnMoreName = expanded ? "Show Less" : "Learn More";

    const handleExpand = () => {
        setExpanded(!expanded);
    }

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Question:
        </Typography>
                <Typography variant="h5" component="h2">
                    {text}
                </Typography>
                <br />
            </CardContent>
            <CardActions>
                <Button size="small" onClick={handleExpand}>{learnMoreName}</Button>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>
                        {learnMore}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
