import React, { useState } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import Api from '../../helpers/api';
import { Button, H1, Article, Aside, Grid, GridCell, Section, Label, Input, Dropdown, DropdownItem, Checkbox, Radio, P } from 'react-alegrify-ui';
import { translate } from '../../helpers/language';
import { H2 } from 'react-alegrify-ui/build/typography';
import LargeSpinner from '../ui/LargeSpinner';

// Todo blocking: check if is not already a user

const LANGUAGES_MAP = {
    "Duits": "GERMAN",
    "Engels": "ENGLISH",
    "Fins": "FINNISH",
    "Frans": "FRENCH",
    "Nederlands": "DUTCH",
    "Spaans": "SPANISH",
    "Portugees": "PORTUGUESE"
};
const DEFAULT_LANGUAGE = 'ENGLISH';
const GENDER_MAP = {
    "Man": "MALE",
    "Vrouw": "FEMALE"
};
const DEFAULT_GENDER = 'OTHER';

function Verify(props) {
    if (!props.match || !props.match.params || !props.match.params.name) {
        return (
            <Redirect
                to="/signup"
            />
        )
    }

    const { name } = props.match.params;
    const [ firstName ] = name.split(' ');

    const [ prediction, setPrediction ] = useState({
        pristine: true,
        firstName,
        lastName: name.replace(`${firstName} `, ''),
        languages: []
    });
    const [ validationErrors, setValidationErrors ] = useState({});
    const [ isSubmitting, setIsSubmitting ] = useState(false);
    const [ hasStepCompleted, setHasStepCompleted ] = useState(false);
    const [ needsVerification, setNeedsVerification ] = useState(false);

    async function fetchAutocomplete() {
        try {
            if (prediction.pristine) {
                const predictionData = await Api.get(`/api/auth/consult-predict?q=${name}`);

                if (predictionData.licenseNumber) {
                    predictionData.hasVerifiedLicenseNumber = true;
                }

                setPrediction(psychoPredictionToUsableData(predictionData));
            }
        }
        catch (ex) {}
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setIsSubmitting(true);
            const result = await Api.post('/api/auth/consult-prepare', prediction);

            if (result.success) {
                setHasStepCompleted(true);
                setNeedsVerification(result.needsManualConfirmation);
                window.scrollTo(0,0);
            }
            else {
                setValidationErrors(result);
            }
            setIsSubmitting(false);
        }
        catch (ex) {
            setIsSubmitting(false);
        }
    }

    function changeField(fieldName, fieldValue) {
        delete validationErrors[fieldName];
        setValidationErrors({ ...validationErrors });
        setPrediction({ ...prediction, [fieldName]: fieldValue });
    }

    if (prediction.pristine) {
        fetchAutocomplete();
    }

    if (hasStepCompleted) {
        return (
            <div
                style={{ display: 'flex', alignItems: 'center', height: 'calc(100vh - 64px)' }}
            >
                <Grid
                    middle
                >
                    <GridCell three />
                    <GridCell six>
                        <Section>
                            <LargeSpinner
                                success
                            />

                            {needsVerification ? (
                                <P>{translate('SIGN_UP.VERIFY.COMPLETED.NEEDS_VERIFICATION')}</P>
                            ) : (
                                <P>{translate('SIGN_UP.VERIFY.COMPLETED.NO_VERIFICATION')}</P>
                            )}

                            <Button
                                primary
                                full
                                type="button"
                                onClick={() => window.location.href = 'https://alegrify.com'}
                            >
                                {translate('SIGN_UP.VERIFY.COMPLETED.CTA')}
                            </Button>
                        </Section>
                    </GridCell>
                    <GridCell three />
                </Grid>
            </div>
        );
    }

    return (
        <React.Fragment>
            <Grid>
                <GridCell four>
                    <Aside
                        className="alegrify-space--large"
                    >
                        <Section>
                            <H1 style={{ margin: 0 }}>
                                {translate('SIGN_UP.VERIFY.TITLE', { firstName })}
                            </H1>
                            <P>
                                {translate('SIGN_UP.VERIFY.INTRO')}
                            </P>
                        </Section>
                    </Aside>
                </GridCell>
                <GridCell eight
                >
                    <Article
                        className="alegrify-space--large"
                    >
                        <VerifyForm
                            data={prediction}
                            validationErrors={validationErrors}
                            onFieldChange={changeField}
                            onSubmit={handleSubmit}
                            isSubmitting={isSubmitting}
                        />
                    </Article>
                </GridCell>
            </Grid>
        </React.Fragment>
    )
}

function VerifyForm(props) {
    return (
        <form
            method="post"
            onSubmit={props.onSubmit}
        >
            <Section
                className="alegrify-space--large"
            >
                <H2 style={{ marginTop: 0 }}>{translate('SIGN_UP.VERIFY.BASIC')}</H2>
                <Label
                    htmlFor="firstName"
                >
                    {translate('SIGN_UP.VERIFY.FIRST_NAME_LABEL')}
                </Label>
                <Input
                    id="firstName"
                    name="firstName"
                    value={props.data.firstName}
                    onValueChange={value => props.onFieldChange('firstName', value)}
                    full
                    className={props.validationErrors['firstName'] ? '' : 'alegrify-space--large'}
                />
                {props.validationErrors['firstName'] ? (
                    <Label
                        error
                        htmlFor="firstName"
                        className="alegrify-space--large"
                    >
                        {translate('SIGN_UP.VERIFY.VALIDATION_ERRORS.FIRSTNAME')}
                    </Label>
                ) : null}

                <Label
                    htmlFor="lastName"
                >
                    {translate('SIGN_UP.VERIFY.LAST_NAME_LABEL')}
                </Label>
                <Input
                    id="lastName"
                    name="lastName"
                    value={props.data.lastName}
                    onValueChange={value => props.onFieldChange('lastName', value)}
                    full
                    className={props.validationErrors['lastName'] ? '' : 'alegrify-space--large'}
                />
                {props.validationErrors['lastName'] ? (
                    <Label
                        error
                        htmlFor="lastName"
                        className="alegrify-space--large"
                    >
                        {translate('SIGN_UP.VERIFY.VALIDATION_ERRORS.LASTNAME')}
                    </Label>
                ) : null}

                <Label
                    htmlFor="fullName"
                >
                    {translate('SIGN_UP.VERIFY.FULL_NAME_LABEL')}
                </Label>
                <Input
                    id="fullName"
                    name="fullName"
                    value={`${props.data.firstName} ${props.data.lastName}`}
                    full
                    className="alegrify-space--large"
                    disabled
                />

                <Label
                    htmlFor="gender"
                >
                    {translate('SIGN_UP.VERIFY.GENDER_LABEL')}
                </Label>
                <Dropdown
                    id="gender"
                    name="gender"
                    value={props.data.gender}
                    onValueChange={value => props.onFieldChange('gender', value)}
                    className={props.validationErrors['gender'] ? '' : 'alegrify-space--large'}
                >
                    <DropdownItem
                        id="gender_male"
                        name="gender_male"
                        value="MALE"
                    >
                        {translate('SIGN_UP.VERIFY.GENDER_MALE')}
                    </DropdownItem>
                    <DropdownItem
                        id="gender_female"
                        name="gender_female"
                        value="FEMALE"
                    >
                        {translate('SIGN_UP.VERIFY.GENDER_FEMALE')}
                    </DropdownItem>
                    <DropdownItem
                        id="gender_other"
                        name="gender_other"
                        value="OTHER"
                    >
                        {translate('SIGN_UP.VERIFY.GENDER_OTHER')}
                    </DropdownItem>
                </Dropdown>
                {props.validationErrors['gender'] ? (
                    <Label
                        error
                        htmlFor="gender"
                        className="alegrify-space--large"
                    >
                        {translate('SIGN_UP.VERIFY.VALIDATION_ERRORS.GENDER')}
                    </Label>
                ) : null}

                <Label
                    htmlFor="licenseNumber"
                >
                    {translate('SIGN_UP.VERIFY.LICENSE_NUMBER')}
                </Label>
                <Input
                    id="licenseNumber"
                    name="licenseNumber"
                    value={props.data.licenseNumber}
                    full
                    disabled={props.data.hasVerifiedLicenseNumber}
                />
            </Section>
            <Section
                className="alegrify-space--large"
            >
                <H2 style={{ marginTop: 0 }}>{translate('SIGN_UP.VERIFY.SKILLS')}</H2>
                <Label
                    htmlFor="language"
                    className="alegrify-space--large"
                >
                    {translate('SIGN_UP.VERIFY.LANGUAGE_LABEL')}
                </Label>
                {props.validationErrors['languages'] ? (
                    <Label
                        error
                        htmlFor="language"
                        className="alegrify-space--large"
                    >
                        {translate('SIGN_UP.VERIFY.VALIDATION_ERRORS.LANGUAGES')}
                    </Label>
                ) : null}
                {Object
                    .keys(LANGUAGES_MAP)
                    .map(key => LANGUAGES_MAP[key])
                    .map((lang, index) => (
                        <Checkbox
                            key={index}
                            name="language"
                            id={`language_${lang}`}
                            value={lang}
                            checked={(props.data.languages || []).indexOf(lang) > -1}
                            onChange={e => {
                                let languages = props.data.languages;

                                if (e.target.checked) {
                                    languages.push(lang);
                                }
                                else {
                                    languages = languages.filter(l => l !== lang);
                                }

                                props.onFieldChange('languages', languages);
                            }}
                        >
                            {translate(`SIGN_UP.LANGUAGES.${lang}`)}
                        </Checkbox>
                    ))
                }
            </Section>
            <Section
                className="alegrify-space--large"
            >
                <H2 style={{ marginTop: 0 }}>
                    {translate('SIGN_UP.VERIFY.CONTACT_DETAILS')}
                </H2>

                <Label
                    htmlFor="email"
                    className={(props.data.emails || []).length === 0 ? '' : 'alegrify-space--large'}
                >
                    {translate('SIGN_UP.VERIFY.EMAIL_LABEL')}
                </Label>
                {(props.data.emails || []).map((email, index) => (
                    <Radio
                        key={index}
                        name="email"
                        id={`email_${index}`}
                        onChange={() => props.onFieldChange('email', email)}
                    >
                        {email}
                    </Radio>
                ))}
                {(props.data.emails || []).length === 0 ? (
                    <Input
                        id="email"
                        name="email"
                        full
                        className={props.validationErrors['email'] ? '' : 'alegrify-space--large'}
                        onValueChange={email => props.onFieldChange('email', email)}
                    />
                ) : null}
                {props.validationErrors['email'] ? (
                    <Label
                        error
                        htmlFor="email"
                        className="alegrify-space--large"
                    >
                        {translate('SIGN_UP.VERIFY.VALIDATION_ERRORS.EMAIL')}
                    </Label>
                ) : null}

                <P>
                    {(props.data.emails || []).length ? 
                        translate('SIGN_UP.VERIFY.VERIFY_EMAIL_EXPLANATION') :
                        translate('SIGN_UP.VERIFY.VERIFY_EMAIL_EXPLANATION_ALT')
                    }
                </P>

                <Label
                    htmlFor="phone"
                >
                    {translate('SIGN_UP.VERIFY.PHONE_LABEL')}
                </Label>
                {(props.data.phones || []).map((phone, index) => (
                    <Radio
                        key={index}
                        name="phone"
                        id={`phone${index}`}
                        onChange={() => props.onFieldChange('phone', phone)}
                    >
                        {phone}
                    </Radio>
                ))}
                {(props.data.phones || []).length === 0 ? (
                    <Input
                        id="phone"
                        name="phone"
                        full
                        className={props.validationErrors['phone'] ? '' : 'alegrify-space--large'}
                        onValueChange={phone => props.onFieldChange('phone', phone)}
                    />
                ) : null}
                {props.validationErrors['phone'] ? (
                    <Label
                        error
                        htmlFor="phone"
                        className="alegrify-space--large"
                    >
                        {translate('SIGN_UP.VERIFY.VALIDATION_ERRORS.PHONE')}
                    </Label>
                ) : null}
            </Section>

            <Section
                className="alegrify-space--large"
            >
                <H2 style={{ marginTop: 0 }}>
                    {translate('SIGN_UP.VERIFY.ANYTHING_ELSE')}
                </H2>

                <Input
                    full
                    multiline
                    value={props.data.extraInfo}
                    onValueChange={value => props.onFieldChange('extraInfo', value)}
                />
            </Section>

            <Section>
                <Button
                    primary
                    type="submit"
                    disabled={props.isSubmitting}
                >
                    {translate('SIGN_UP.VERIFY.CTA')}
                </Button>
            </Section>
        </form>
    );
}

function psychoPredictionToUsableData(input) {
    return {
        firstName: input.name.split(' ')[0],
        lastName: input.name.replace(`${input.name.split(' ')[0]} `, ''),
        fullName: input.name,
        languages: (input.language || [ 'Engels' ]).map(lang => LANGUAGES_MAP[lang] || DEFAULT_LANGUAGE),
        gender: GENDER_MAP[input.gender] || DEFAULT_GENDER,
        licenseNumber: input.licenseNumber,
        extraInfo: (input.extraInfo || '').trim().replace(/\t/gi, '').replace(/[ ]+/gi, ' '),
        emails: (input.addresses || []).map(a => a.email).filter(a => !!a && a.length),
        phones: (input.addresses || [])
        // eslint-disable-next-line
            .map(a => (a.phone || '').replace(/[/\\_\?\.\:\;\* a-zA-Z]+/gi, ''))
            .filter(a => !!a && a.length)
    };
}

export default withRouter(Verify);