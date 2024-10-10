import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISServiceDeskCounterpartyLForm from './forms/i-i-s-service-desk-counterparty-l';
import IISServiceDeskIncidentLForm from './forms/i-i-s-service-desk-incident-l';
import IISServiceDeskPostionLForm from './forms/i-i-s-service-desk-postion-l';
import IISServiceDeskResponsibleLForm from './forms/i-i-s-service-desk-responsible-l';
import IISServiceDeskCounterpartyEForm from './forms/i-i-s-service-desk-counterparty-e';
import IISServiceDeskIncidentEForm from './forms/i-i-s-service-desk-incident-e';
import IISServiceDeskPostionEForm from './forms/i-i-s-service-desk-postion-e';
import IISServiceDeskResponsibleEForm from './forms/i-i-s-service-desk-responsible-e';
import IISServiceDeskCommentModel from './models/i-i-s-service-desk-comment';
import IISServiceDeskCounterpartyModel from './models/i-i-s-service-desk-counterparty';
import IISServiceDeskIncidentModel from './models/i-i-s-service-desk-incident';
import IISServiceDeskPostionModel from './models/i-i-s-service-desk-postion';
import IISServiceDeskResponsibleModel from './models/i-i-s-service-desk-responsible';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-service-desk-comment': IISServiceDeskCommentModel,
    'i-i-s-service-desk-counterparty': IISServiceDeskCounterpartyModel,
    'i-i-s-service-desk-incident': IISServiceDeskIncidentModel,
    'i-i-s-service-desk-postion': IISServiceDeskPostionModel,
    'i-i-s-service-desk-responsible': IISServiceDeskResponsibleModel
  },

  'application-name': 'Service desk',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Service desk',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Service desk',
          title: 'Service desk'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'service-desk': {
          caption: 'Service Desk',
          title: 'Service Desk',
          'i-i-s-service-desk-incident-l': {
            caption: 'Incident',
            title: ''
          },
          справочники: {
            caption: 'Справочники',
            title: 'Справочники',
            'i-i-s-service-desk-responsible-l': {
              caption: 'Ответственные',
              title: 'Responsible'
            },
            'i-i-s-service-desk-counterparty-l': {
              caption: 'Контрагенты',
              title: 'Counterparty'
            },
            'i-i-s-service-desk-postion-l': {
              caption: 'Должности',
              title: 'Postion'
            }
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-service-desk-counterparty-l': IISServiceDeskCounterpartyLForm,
    'i-i-s-service-desk-incident-l': IISServiceDeskIncidentLForm,
    'i-i-s-service-desk-postion-l': IISServiceDeskPostionLForm,
    'i-i-s-service-desk-responsible-l': IISServiceDeskResponsibleLForm,
    'i-i-s-service-desk-counterparty-e': IISServiceDeskCounterpartyEForm,
    'i-i-s-service-desk-incident-e': IISServiceDeskIncidentEForm,
    'i-i-s-service-desk-postion-e': IISServiceDeskPostionEForm,
    'i-i-s-service-desk-responsible-e': IISServiceDeskResponsibleEForm
  },

});

export default translations;
