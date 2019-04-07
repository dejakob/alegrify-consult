import i18next from 'i18next';
import en from '../data/translations/en.json';
import nl from '../data/translations/nl.json';

// Todo: make sure not all languages are in build

const resources = {
    en: { translation: en },
    nl: { translation: nl }
};
const supportedLanguages = Object.keys(resources);
const fallbackLanguage = 'en';

const getNavigatorLanguage = () => {
    if (navigator.languages && navigator.languages.length) {
      return navigator.languages[0];
    } else {
      return navigator.userLanguage || navigator.language || navigator.browserLanguage || 'en';
    }
}
const browserLanguage = getNavigatorLanguage() || 'en';

i18next.init({
    lng: browserLanguage.split('-')[0],
    fallbackLng: fallbackLanguage,
    debug: false,
    resources
});

function translate(key, options) {
    return i18next.t(key, options);
}
translate.supportedLanguages = supportedLanguages;
translate.fallbackLanguage = fallbackLanguage;

function setLanguage(language) {
    i18next.changeLanguage(language);
}

export {
    translate,
    setLanguage
};
