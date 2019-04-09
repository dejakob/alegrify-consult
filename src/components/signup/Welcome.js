import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Api from '../../helpers/api';
import { H1, Article, Input, Button, Section, Label, Grid, GridCell, DropdownItem, Radio } from 'react-alegrify-ui';
import { translate } from '../../helpers/language';

function Welcome(props) {
    const [ typedName, setTypedName ] = useState('');
    const [ autocompleteResults, setAutocompleteResults ] = useState([]);
    const [ selectedName, setSelectedName ] = useState(null);
    const [ hasSubmitted, setHasSubmitted ] = useState(false);

    useEffect(() => {

        // Todo: debounce
        async function fetchAutocomplete() {
            if (typedName.length >= 3) {
                setAutocompleteResults(
                    await Api.get(`/api/auth/consult-autocomplete?q=${typedName}`)
                );
            }
            else {
                setAutocompleteResults([]);
                setSelectedName(null);
            }
        }
        fetchAutocomplete();
    }, [typedName]);

    return (
        <Article>
            <Grid
                center
            >
                <GridCell three />
                <GridCell
                    six
                >
                    <H1>
                        <div
                            style={{ textAlign: 'center' }}
                        >
                            {translate('SIGN_UP.WELCOME.TITLE')}
                        </div>
                    </H1>

                    <form
                        method="POST"
                        action="/signup/verify"
                        onSubmit={e => {
                            e.preventDefault();
                            setHasSubmitted(true);

                            if (selectedName) {
                                props.history.push(`/signup/verify/${selectedName}`)
                            }

                            else if (typedName && typedName.indexOf(' ') > 0) {
                                props.history.push(`/signup/verify/${typedName}`)
                            }
                        }}
                    >
                        <Section>
                            <Label
                                htmlFor="name"
                            >
                                {translate('SIGN_UP.WELCOME.SUBTITLE')}
                            </Label>
                            <Input
                                full
                                placeholder={translate('SIGN_UP.WELCOME.NAME_INPUT_PLACEHOLDER')}
                                className={hasSubmitted && (!typedName || typedName.indexOf(' ') <= 0) ? '' : 'alegrify-space--large'}
                                name="name"
                                id="name"
                                value={typedName}
                                onValueChange={setTypedName}
                            />
                            {hasSubmitted && (!typedName || typedName.indexOf(' ') <= 0) ? (
                                <Label
                                    htmlFor="name"
                                    className="alegrify-space--large"
                                    error
                                >
                                    {translate('SIGN_UP.WELCOME.VALIDATION_ERRORS.NAME')}
                                </Label>
                            ) : null}

                            <div
                                className={autocompleteResults.length ? 'alegrify-space--large' : ''}
                            >
                                {autocompleteResults.map((result, index) => (
                                    <Radio
                                        key={index}
                                        name="selected_name"
                                        id={`selected_name_${index}`}
                                        onChange={() => setSelectedName(result)}
                                        checked={selectedName === result}
                                    >
                                        {result}
                                    </Radio>
                                ))}
                            </div>

                            <Button
                                type="submit"
                                primary
                                disabled={typedName.length < 3 || autocompleteResults.length && !selectedName}
                            >
                                {translate('SIGN_UP.WELCOME.CTA')}
                            </Button>
                        </Section>
                    </form>
                </GridCell>
                <GridCell three />
            </Grid>
        </Article>
    );
}

export default withRouter(Welcome);
