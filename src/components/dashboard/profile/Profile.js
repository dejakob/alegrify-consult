import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { SideNavAwareMain } from '../../ui/SideNav';
import ProfileHeader from './ProfileHeader';
import ProfileNav from './ProfileNav';
import Overview from './overview/Overview';
import Thoughts from './thoughts/Thoughts';
import Personality from './personality/Personality';

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
                <Route path={`/dashboard/${props.user._id}/personality`} component={() => <Personality user={props.user} />} />
                <Route path={`/dashboard/${props.user._id}/thoughts`} component={() => <Thoughts user={props.user} />} />
                <Route path={`/dashboard/${props.user._id}`} component={() => <Overview user={props.user} />} />
            </Switch>
            
        </SideNavAwareMain>
    );
}

export default Profile;
