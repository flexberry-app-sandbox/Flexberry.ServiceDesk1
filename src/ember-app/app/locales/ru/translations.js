import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Service desk',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Service desk',
          title: 'Service desk'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
