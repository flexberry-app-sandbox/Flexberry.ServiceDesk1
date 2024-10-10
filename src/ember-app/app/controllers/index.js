import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.service-desk.caption'),
          title: i18n.t('forms.application.sitemap.service-desk.title'),
          children: [{
            link: 'i-i-s-service-desk-incident-l',
            caption: i18n.t('forms.application.sitemap.service-desk.i-i-s-service-desk-incident-l.caption'),
            title: i18n.t('forms.application.sitemap.service-desk.i-i-s-service-desk-incident-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.service-desk.справочники.caption'),
            title: i18n.t('forms.application.sitemap.service-desk.справочники.title'),
            children: [{
              link: 'i-i-s-service-desk-responsible-l',
              caption: i18n.t('forms.application.sitemap.service-desk.справочники.i-i-s-service-desk-responsible-l.caption'),
              title: i18n.t('forms.application.sitemap.service-desk.справочники.i-i-s-service-desk-responsible-l.title'),
              icon: 'suitcase',
              children: null
            }, {
              link: 'i-i-s-service-desk-counterparty-l',
              caption: i18n.t('forms.application.sitemap.service-desk.справочники.i-i-s-service-desk-counterparty-l.caption'),
              title: i18n.t('forms.application.sitemap.service-desk.справочники.i-i-s-service-desk-counterparty-l.title'),
              icon: 'edit',
              children: null
            }, {
              link: 'i-i-s-service-desk-postion-l',
              caption: i18n.t('forms.application.sitemap.service-desk.справочники.i-i-s-service-desk-postion-l.caption'),
              title: i18n.t('forms.application.sitemap.service-desk.справочники.i-i-s-service-desk-postion-l.title'),
              children: null
            }]
          }]
        }
      ]
    };
  }),
})