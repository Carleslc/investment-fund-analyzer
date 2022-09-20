import { Quasar } from 'quasar';
import { boot } from 'quasar/wrappers';
import { createI18n } from 'vue-i18n';
import quasarLanguages from 'quasar/lang/index.json';

import messages from 'src/i18n';

export type MessageLanguages = keyof typeof messages;

// Type-define 'en' as the master schema for the resource
export type MessageSchema = typeof messages.en;

// See https://vue-i18n.intlify.dev/guide/advanced/typescript.html#global-resource-schema-type-definition
/* eslint-disable @typescript-eslint/no-empty-interface */
declare module "vue-i18n" {
  // define the locale messages schema
  export interface DefineLocaleMessage extends MessageSchema {}

  // define the datetime format schema
  export interface DefineDateTimeFormat {}

  // define the number format schema
  export interface DefineNumberFormat {}
}
/* eslint-enable @typescript-eslint/no-empty-interface */

const fallbackLocale = 'en-US';

function splitLocale(locale: string) {
  return locale.split('-')[0];
}

function browserLocale() {
  let locale = splitLocale(Quasar.lang.getLocale() || fallbackLocale);

  if (!(locale in messages)) {
    locale = splitLocale(fallbackLocale);
  }

  return locale;
}

function quasarLangLocale() {
  let locale = Quasar.lang.getLocale() || fallbackLocale;

  if (!quasarLanguages.some(lang => lang.isoName === locale)) {
    locale = splitLocale(locale);

    if (!quasarLanguages.some(lang => lang.isoName === locale)) {
      locale = fallbackLocale;
    }
  }

  return locale;
}

export default boot(({ app }) => {
  import(/* @vite-ignore */ `../../node_modules/quasar/lang/${quasarLangLocale()}`).then(lang => {
    Quasar.lang.set(lang.default);
  });

  const i18n = createI18n({
    locale: browserLocale(),
    fallbackLocale: splitLocale(fallbackLocale),
    legacy: false,
    messages,
  });

  // Set i18n instance on app
  app.use(i18n);
});
