import React from 'react';
import { Section, Label, Checkbox, Button } from 'react-alegrify-ui';

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
                    Active modules
                </Label>
                <Checkbox
                    name="modules"
                    id="modules_thoughts"
                    value="thoughts"
                    disabled
                    checked
                    className="alegrify-space--large"
                >
                    Thoughts
                </Checkbox>

                <Button
                    type="submit"
                    primary
                >
                    Save
                </Button>
            </form>
        </Section>
    );
}

export default OverviewThoughts;
