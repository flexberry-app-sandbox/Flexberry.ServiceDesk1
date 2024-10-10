import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  commentText: DS.attr('string'),
  incident: DS.belongsTo('i-i-s-service-desk-incident', { inverse: 'comment', async: false })
});

export let ValidationRules = {
  commentText: {
    descriptionKey: 'models.i-i-s-service-desk-comment.validations.commentText.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  incident: {
    descriptionKey: 'models.i-i-s-service-desk-comment.validations.incident.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('CommentE', 'i-i-s-service-desk-comment', {
    commentText: attr('Comment text', { index: 0 })
  });
};
