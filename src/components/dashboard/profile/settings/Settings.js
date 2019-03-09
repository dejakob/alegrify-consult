import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SettingsArticle from './SettingsArticle';

/**
 * Settings for specific client
 */
class Settings extends PureComponent {
    render() {
        return (
            <SettingsArticle
                user={this.props.user}
            />
        )
    }
}

Settings.propTypes = {
    user: PropTypes.object
};

export default Settings;
