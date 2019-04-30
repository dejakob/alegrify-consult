import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import SideNav, {
    SideNavContent,
    SideNavFooter,
    SideNavList
} from '../../ui/SideNav';
import SideNavHeader from './SideNavHeader';
import SideNavListItem from './SideNavListItem';
import { translate } from '../../../helpers/language';

class SideNavComponent extends Component {
    constructor() {
        super();

        this.handleSideNavClick = this.handleSideNavClick.bind(this);
        this.open = this.open.bind(this);
    }

    componentWillMount() {
        this.setState({ isOpen: false });
    }

    handleSideNavClick() {
        this.setState({ isOpen: false });
    }

    open() {
        this.setState({ isOpen: true });
    }

    render() {
        SideNavFactory.instance = this;

        const { props } = this;

        return (
            <SideNav
                className={this.state.isOpen ? 'is-open' : ''}
                onClick={this.handleSideNavClick}
            >
                <SideNavContent>
                    <SideNavHeader />

                    <SideNavList>
                        {props.users.map((user, index) => user.pending ? (
                            <SideNavListItem
                                key={index}
                                to={`/dashboard/connect/pending/${user._id}`}
                                title={user.email}
                                avatar={user.avatar}
                                subtitle={`Connection pending`}
                            />
                        ) : (
                            <SideNavListItem
                                key={index}
                                to={`/dashboard/${user.user_name}`}
                                title={user.full_name}
                                avatar={user.avatar}
                                subtitle={`Connected since ${moment(user.connected_at).format('MMM Do')}`}
                            />
                        ))}
                    </SideNavList>

                    <SideNavFooter
                        to="/dashboard/connect"
                    >
                        <span
                            dangerouslySetInnerHTML={{ __html: translate('PROFILE.USERS_CONNECTED', { amount: props.users.length }) }}
                        />
                        <i className="material-icons">add</i>
                    </SideNavFooter>
                </SideNavContent>
            </SideNav>
        );
    }
}

class SideNavFactory {
    static get instance() {
        return SideNavFactory._instance;
    }

    static set instance(sideNav) {
        SideNavFactory._instance = sideNav;
    }
};

SideNavComponent.factory = SideNavFactory;
SideNavComponent.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            avatar: PropTypes.string,
            connected_at: PropTypes.date
        }).isRequired
    )
};

export default SideNavComponent;
