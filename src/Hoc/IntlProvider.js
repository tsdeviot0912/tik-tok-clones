import React from 'react';
import { useSelector } from 'react-redux';
import { IntlProvider } from 'react-intl';

import '@formatjs/intl-pluralrules/polyfill';
import '@formatjs/intl-pluralrules/locale-data/en';
import '@formatjs/intl-pluralrules/locale-data/vi';

import '@formatjs/intl-relativetimeformat/polyfill';
import '@formatjs/intl-relativetimeformat/locale-data/en';
import '@formatjs/intl-relativetimeformat/locale-data/vi';

import { LanguageUtils } from '../utils';

const messages = LanguageUtils.getFlattenedMessages();

function IntlProviderWrapper({ children }) {
    const language = useSelector((state) => state.app.language);

    console.log('check children :', children);

    return (
        <IntlProvider locale={language} messages={messages[language]} defaultLocale="vi">
            {children}
        </IntlProvider>
    );
}

export default IntlProviderWrapper;
