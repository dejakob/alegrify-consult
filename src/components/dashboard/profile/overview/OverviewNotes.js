import React, { PureComponent } from 'react';
import { Section, Label, Input, Button } from 'react-alegrify-ui';
import Api from '../../../../helpers/api';
import { translate } from '../../../../helpers/language';

class OverviewNotes extends PureComponent {
    constructor() {
        super();

        this.notes = '';
        this.methods = {
            handleSubmit: this.handleSubmit.bind(this),
            handleValueChange: this.handleValueChange.bind(this)
        }
    }

    handleValueChange(notes) {
        this.notes = notes;
    }

    handleSubmit(eventData) {
        eventData.preventDefault();

        Api.patch(
            `/api/consult/notes/${this.props.user._id}`,
            { notes: this.notes }
        )
    }

    render() {
        return OverviewNotesView(
            Object.assign({}, this.props, this.methods)
        );
    }
}

function OverviewNotesView(props) {
    return (
        <Section
            className="alegrify-space--extra-large"
        >
            <form
                method="POST"
                onSubmit={props.handleSubmit}
            >
                <Label
                    htmlFor="notes"
                >
                    {translate('PROFILE.NOTES')}
                </Label>
                <Input
                    name="notes"
                    id="notes"
                    multiline
                    full
                    placeholder="Feel free to leave some notes (private information)"
                    className="alegrify-space--large"
                    value={props.user.notes}
                    onValueChange={props.handleValueChange}
                />
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

export default OverviewNotes;
