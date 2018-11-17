import React from 'react';
import { Button, Card, P, Label, Input } from 'react-alegrify-ui';
import { SideNavAwareMain } from '../../ui/SideNav';
import Mountains from '../../../images/mountains.jpg';

function Connect() {
    return (
        <SideNavAwareMain>
            <div
                style={{ marginTop: '32px' }}
            >
                <Card
                    small
                    headerImage={Mountains}
                    title="Connect"
                    footer={
                        <Button
                            type="submit"
                            primary
                            full
                        >
                            Connect
                        </Button>
                    }
                >
                    <P>
                        To connect with an Alegrify user, please provide their email address. The user needs to accept the request before you can access any data.
                    </P>

                    <Label
                        htmlFor="connect_email"
                    >
                        Email address
                    </Label>
                    <Input
                        id="connect_email"
                        name="connect_email"
                        placeholder="email@provider.com"
                        full
                    />
                </Card>
            </div>
        </SideNavAwareMain>
    );
}

export default Connect;
