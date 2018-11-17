import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { SideNavAwareMain } from '../../ui/SideNav';
import ProfileHeader from './ProfileHeader';
import ProfileNav from './ProfileNav';
import Overview from './overview/Overview';

function Profile(props) {
    return (
        <SideNavAwareMain>
            <ProfileHeader
                user={props.user}
            />
            <ProfileNav
                user={props.user}
            />

            <Switch>
                <Route path={`/dashboard/${props.user._id}/thoughts`} component={() => <div>Thoughts</div>} />
                <Route path={`/dashboard/${props.user._id}`} component={() => <Overview user={props.user} />} />
            </Switch>
            
        </SideNavAwareMain>
    );
}

export default Profile;
