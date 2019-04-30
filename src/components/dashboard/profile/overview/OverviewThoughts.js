import React from 'react';
import { Section, Label, Checkbox, Button } from 'react-alegrify-ui';
import { translate } from '../../../../helpers/language';

function OverviewThoughts(props) {
    return (
        <Section>
            <form
                method="POST"
            >
                <Label
                    htmlFor="modules_thoughts"
                    className="alegrify-space--large"
                >
                    {translate('PROFILE.ACTIVE_MODULES')}
                </Label>
                <Checkbox
                    name="modules"
                    id="modules_thoughts"
                    value="thoughts"
                    disabled
                    checked
                    className="alegrify-space--large"
                >
                    {translate('PROFILE.THOUGHTS')}
                </Checkbox>

                <Button
                    type="submit"
                    primary
                >
                    {translate('PROFILE.SAVE')}
                </Button>
            </form>
        </Section>
    );
}

export default OverviewThoughts;
