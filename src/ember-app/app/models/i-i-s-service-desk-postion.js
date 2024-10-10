import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as PostionMixin
} from '../mixins/regenerated/models/i-i-s-service-desk-postion';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(PostionMixin, Validations, {
});

defineProjections(Model);

export default Model;
