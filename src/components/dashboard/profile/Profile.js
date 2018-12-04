import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { SideNavAwareMain } from '../../ui/SideNav';
import ProfileHeader from './ProfileHeader';
import ProfileNav from './ProfileNav';
import Overview from './overview/Overview';
import Thoughts from './thoughts/Thoughts';
import Thought from './thought/Thought';
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
                <Route path={`/dashboard/${props.user.user_name}/personality`} component={() => <Personality user={props.user} />} />
                <Route path={`/dashboard/${props.user.user_name}/thought/:thoughtId`} component={({ match }) => <Thought user={props.user} thought={match.params.thought} />} />
                <Route path={`/dashboard/${props.user.user_name}/thoughts`} component={() => <Thoughts user={props.user} />} />
                <Route path={`/dashboard/${props.user.user_name}`} component={() => <Overview user={props.user} />} />
            </Switch>
            
        </SideNavAwareMain>
    );
}

export default Profile;
