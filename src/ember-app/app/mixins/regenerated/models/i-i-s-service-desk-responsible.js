import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  surname: DS.attr('string'),
  postion: DS.belongsTo('i-i-s-service-desk-postion', { inverse: null, async: false })
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.i-i-s-service-desk-responsible.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  surname: {
    descriptionKey: 'models.i-i-s-service-desk-responsible.validations.surname.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  postion: {
    descriptionKey: 'models.i-i-s-service-desk-responsible.validations.postion.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ResponsibleE', 'i-i-s-service-desk-responsible', {
    name: attr('Name', { index: 0 }),
    surname: attr('Surname', { index: 1 }),
    postion: belongsTo('i-i-s-service-desk-postion', 'Postion', {
      name: attr('Name', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'name' })
  });

  modelClass.defineProjection('ResponsibleL', 'i-i-s-service-desk-responsible', {
    name: attr('Name', { index: 0 }),
    surname: attr('Surname', { index: 1 }),
    postion: belongsTo('i-i-s-service-desk-postion', 'Name', {
      name: attr('Name', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
