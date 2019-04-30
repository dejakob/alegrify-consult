import React from 'react';
import { Article, Section, Button } from 'react-alegrify-ui';
import Api from '../../../../helpers/api';
import store, { ACTIONS } from '../../../../services/store';
import SettingsConfirmDialog from './SettingsConfirmDialog';
import createComponent from '../../../../helpers/create-component';
import { translate } from '../../../../helpers/language';

const SettingsArticle = createComponent({
    state: { shouldShowDisconnectConfirm: false },
    selector: () => store.getState().clients,
    methods: {
        showDisconnectConfirm: () => ({ shouldShowDisconnectConfirm: true }),
        hideDisconnectConfirm: () => ({ shouldShowDisconnectConfirm: false }),
        disconnect: handleDisconnect
    },
    render: SettingsArticleView
});

async function handleDisconnect() {
    try {
        this.hideDisconnectConfirm();
        store.dispatch({ type: ACTIONS.DISCONNECT, clientId: this.props.user._id });

        await Api.delete('/api/connect/from/client', {
            userId: this.props.user._id
        });

        store.dispatch({ type: ACTIONS.DISCONNECT_SUCCESS, clientId: this.props.user._id });
    }
    catch (ex) {
        store.dispatch({ type: ACTIONS.DISCONNECT_FAILED });
    }
}

function SettingsArticleView(props) {
    return (
        <Article>
            <Section>
                <Button
                    destructive
                    disabled={props.isDisconnecting}
                    onClick={props.showDisconnectConfirm}
                    type="button"
                >
                    {translate('PROFILE.DISCONNECT')}
                </Button>
            </Section>

            <SettingsConfirmDialog
                open={props.shouldShowDisconnectConfirm}
                onYes={props.disconnect}
                onNo={props.hideDisconnectConfirm}
            >
                {translate('PROFILE.DISCONNECT_CONFIRM', { fullName: props.user.full_name })}
            </SettingsConfirmDialog>
        </Article>
    );
}

export default SettingsArticle;
