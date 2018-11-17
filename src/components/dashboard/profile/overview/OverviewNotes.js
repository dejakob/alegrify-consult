import React from 'react';
import { Section, Label, Input, Button } from 'react-alegrify-ui';

function OverviewNotes(props) {
    return (
        <Section
            className="alegrify-space--extra-large"
        >
            <form
                method="POST"
            >
                <Label
                    htmlFor="notes"
                >
                    Notes
                </Label>
                <Input
                    name="notes"
                    id="notes"
                    multiline
                    full
                    placeholder="Feel free to leave some notes (private information)"
                    className="alegrify-space--large"
                />
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

export default OverviewNotes;
