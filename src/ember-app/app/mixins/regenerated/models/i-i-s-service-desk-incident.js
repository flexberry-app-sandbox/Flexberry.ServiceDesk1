import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  description: DS.attr('string'),
  iD: DS.attr('number'),
  soveBefore: DS.attr('date'),
  status: DS.attr('i-i-s-service-desk-t-status'),
  topic: DS.attr('string'),
  counterparty: DS.belongsTo('i-i-s-service-desk-counterparty', { inverse: null, async: false }),
  responsible: DS.belongsTo('i-i-s-service-desk-responsible', { inverse: null, async: false }),
  comment: DS.hasMany('i-i-s-service-desk-comment', { inverse: 'incident', async: false })
});

export let ValidationRules = {
  description: {
    descriptionKey: 'models.i-i-s-service-desk-incident.validations.description.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  iD: {
    descriptionKey: 'models.i-i-s-service-desk-incident.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  soveBefore: {
    descriptionKey: 'models.i-i-s-service-desk-incident.validations.soveBefore.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  status: {
    descriptionKey: 'models.i-i-s-service-desk-incident.validations.status.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  topic: {
    descriptionKey: 'models.i-i-s-service-desk-incident.validations.topic.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  counterparty: {
    descriptionKey: 'models.i-i-s-service-desk-incident.validations.counterparty.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  responsible: {
    descriptionKey: 'models.i-i-s-service-desk-incident.validations.responsible.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  comment: {
    descriptionKey: 'models.i-i-s-service-desk-incident.validations.comment.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('IncidentE', 'i-i-s-service-desk-incident', {
    iD: attr('ID', { index: 0 }),
    topic: attr('Topic', { index: 1 }),
    description: attr('Description', { index: 2 }),
    status: attr('Status', { index: 3 }),
    soveBefore: attr('Sove before', { index: 4 }),
    responsible: belongsTo('i-i-s-service-desk-responsible', 'Responsible', {
      name: attr('Name', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'name' }),
    counterparty: belongsTo('i-i-s-service-desk-counterparty', 'Counterparty', {
      name: attr('Name', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'name' }),
    comment: hasMany('i-i-s-service-desk-comment', 'Comment', {
      commentText: attr('Comment text', { index: 0 })
    })
  });

  modelClass.defineProjection('IncidentL', 'i-i-s-service-desk-incident', {
    iD: attr('ID', { index: 0 }),
    topic: attr('Topic', { index: 1 }),
    description: attr('Description', { index: 2 }),
    status: attr('Status', { index: 3 }),
    soveBefore: attr('Sove before', { index: 4 }),
    responsible: belongsTo('i-i-s-service-desk-responsible', 'Name', {
      name: attr('Name', { index: 5 })
    }, { index: -1, hidden: true }),
    counterparty: belongsTo('i-i-s-service-desk-counterparty', 'Name', {
      name: attr('Name', { index: 6 })
    }, { index: -1, hidden: true })
  });
};
