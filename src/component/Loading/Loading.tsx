import { Backdrop, CircularProgress, createStyles, DialogTitle, Grid, makeStyles, Theme } from "@material-ui/core"
import React from "react"


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff',
        },
    }),
);

type Props = {
    backDrop?: boolean
}

export const Loading = (props?: Props) => {
    const classes = useStyles();
    return (
        <Backdrop className={classes.backdrop} open={props.backDrop ?? true}>
            <Grid container justify="center">
                <Grid item>
                    <DialogTitle id="simple-dialog-title">
                        <CircularProgress color="secondary" />
                    </DialogTitle>
                </Grid>
            </Grid >
        </Backdrop>
    )
}