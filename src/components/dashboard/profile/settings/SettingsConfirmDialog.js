import React from 'react';
import PropTypes from 'prop-types';
import { Button, Dialog, Grid, GridCell, P } from 'react-alegrify-ui';

function SettingsConfirmDialog(props) {
    return (
        <Dialog
            open={props.open}
        >
            <P>
                {props.children}
            </P>

            <Grid
                all
            >
                <GridCell
                    four
                >
                    <Button
                        destructive
                        full
                        onClick={props.onYes}
                    >
                        Yes
                    </Button>
                </GridCell>
                <GridCell
                    eight
                >
                    <Button
                        full
                        onClick={props.onNo}
                    >
                        No
                    </Button>
                </GridCell>
            </Grid>
        </Dialog>
    );
}

SettingsConfirmDialog.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,

    open: PropTypes.bool,
    onYes: PropTypes.func.isRequired,
    onNo: PropTypes.func.isRequired
}

export default SettingsConfirmDialog;
