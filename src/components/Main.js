import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#000'
    }
}));

const Main = () => {
    const classes = useStyles();
    
    return (
        <Grid container spacing={4}>
            <Grid item xs={12}>
                <div className={classes.root}>
                    
                </div> 
            </Grid>
        </Grid>
    )
}

export default Main
