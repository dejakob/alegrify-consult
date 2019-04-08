import React, { useEffect, useState } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import Api from '../../helpers/api';
import { Button, H1, Article, Aside, Grid, GridCell, Section, Label, Input, Dropdown, DropdownItem, Checkbox, Radio, P } from 'react-alegrify-ui';
import Avatar from '../ui/Avatar';
import { translate } from '../../helpers/language';
import { H2 } from 'react-alegrify-ui/build/typography';


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
        lastName: name.replace(`${firstName} `, '')
    });

    async function fetchAutocomplete() {
        try {
            if (prediction.pristine) {
                const predictionData = await Api.get(`/api/auth/consult-predict?q=${name}`)
                setPrediction(psychoPredictionToUsableData(predictionData));
            }
        }
        catch (ex) {}
    }

    function changeField(fieldName, fieldValue) {
        setPrediction({ ...prediction, [fieldName]: fieldValue });
    }

    if (prediction.pristine) {
        fetchAutocomplete();
    }

    return (
        <React.Fragment>
            <H1>
                <div
                    style={{ textAlign: 'center' }}
                >
                    {translate('SIGN_UP.VERIFY.TITLE', { firstName })}
                </div>
            </H1>

            <Grid>
                <GridCell four>
                    <Aside>
                        <Section>
                            <Grid
                                middle
                                all
                            >
                                <GridCell>                                
                                    <Avatar
                                        height="100"
                                        width="100"
                                        src="https://storage.googleapis.com/alegrify/avatar_5bf01477d3954538a87b2af3_1543863540529_5413914.50605762320x320.jpg"
                                    />
                                </GridCell>
                                <GridCell> 
                                    <Button>
                                        {translate('SIGN_UP.VERIFY.UPLOAD_PICTURE')}
                                    </Button>
                                </GridCell>
                            </Grid>
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
                            onFieldChange={changeField}
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
                    className="alegrify-space--large"
                />

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
                    className="alegrify-space--large"
                />

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
                    className="alegrify-space--large"
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
                    className="alegrify-space--large"
                    disabled
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
            <Section>
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
                    >
                        {email}
                    </Radio>
                ))}
                {(props.data.emails || []).length === 0 ? (
                    <Input
                        id="email"
                        name="email"
                        full
                        className="alegrify-space--large"
                    />
                ) : null}

                <P>
                    {(props.data.emails || []).length ? 
                        translate('SIGN_UP.VERIFY.VERIFY_EMAIL_EXPLANATION') :
                        translate('SIGN_UP.VERIFY.VERIFY_EMAIL_EXPLANATION_ALT')
                    }
                </P>

                <Label
                    htmlFor="phone"
                    className="alegrify-space--large"
                >
                    {translate('SIGN_UP.VERIFY.PHONE_LABEL')}
                </Label>
                {(props.data.phones || []).map((phone, index) => (
                    <Radio
                        key={index}
                        name="phone"
                        id={`phone${index}`}
                    >
                        {phone}
                    </Radio>
                ))}
                {(props.data.phones || []).length === 0 ? (
                    <Input
                        id="phone"
                        name="phone"
                        full
                        className="alegrify-space--large"
                    />
                ) : null}
            </Section>
        </form>
    );
}

function psychoPredictionToUsableData(input) {
    return {
        firstName: input.name.split(' ')[0],
        lastName: input.name.replace(`${input.name.split(' ')[0]} `, ''),
        fullName: input.name,
        languages: input.language || [ 'Engels' ].map(lang => LANGUAGES_MAP[lang] || DEFAULT_LANGUAGE),
        gender: GENDER_MAP[input.gender] || DEFAULT_GENDER,
        aboutMe: input.extraInfo,
        licenseNumber: input.licenseNumber,
        emails: (input.addresses || []).map(a => a.email).filter(a => !!a && a.length),
        phones: (input.addresses || [])
            .map(a => (a.phone || '').replace(/[/\\_\?\.\:\;\* a-zA-Z]+/gi, ''))
            .filter(a => !!a && a.length)
    };
}

export default withRouter(Verify);