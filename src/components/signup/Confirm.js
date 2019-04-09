import React, { useState } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { Input, Label, Article, Section, Aside, Grid, GridCell, Button } from 'react-alegrify-ui';
import Api from '../../helpers/api';
import { translate } from '../../helpers/language';

/**
 * Confirm
 * @param {Object} props 
 */
function Confirm(props) {
    console.log('match', props.match);

    if (!props.match || !props.match.params || !props.match.params.code) {
        return (
            <Redirect
                to="/signup"
            />
        )
    }

    const { code } = props.match.params;
    const [ userId, setUserId ] = useState(null);
    const [ userName, setUserName ] = useState('');
    const [ password, setPassword ] = useState('');

    function handleFormSubmit(e) {
        e.preventDefault();
    }

    async function confirmWithCode() {
        try {
            const fetchedUserId = await Api.get(`/api/auth/consult-confirm/${code}`);
            setUserId(fetchedUserId);
        }
        catch (ex) {
            setUserId(false);
        }
    }
    
    return (
        <form
            onSubmit={handleFormSubmit}
        >
            <Grid>
                <GridCell
                    eight
                >
                    <Article>
                        <Section>
                            <Label
                                htmlFor="userName"
                            >
                                {translate('SIGN_UP.CONFIRM.USER_NAME')}
                            </Label>
                            <Input
                                name="userName"
                                id="userName"
                                value={userName}
                                onValueChange={setUserName}
                                full
                                className="alegrify-space--large"
                            />

                            <Label
                                htmlFor="password"
                            >
                                {translate('SIGN_UP.CONFIRM.PASSWORD')}
                            </Label>
                            <Input
                                name="password"
                                id="password"
                                type="password"
                                value={password}
                                onValueChange={setPassword}
                                full
                                className="alegrify-space--large"
                            />

                            <Button
                                primary
                            >
                                {translate('SIGN_UP.CONFIRM.CTA')}
                            </Button>
                        </Section>
                    </Article>
                </GridCell>
                <GridCell
                    four
                >
                    <Aside>
                        <Section>
                        
                        </Section>
                    </Aside>
                </GridCell>
            </Grid>
        </form>
    );
}

export default withRouter(Confirm);