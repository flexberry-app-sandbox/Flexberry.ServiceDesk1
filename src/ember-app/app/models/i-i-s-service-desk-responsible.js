import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ResponsibleMixin
} from '../mixins/regenerated/models/i-i-s-service-desk-responsible';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ResponsibleMixin, Validations, {
});

defineProjections(Model);

export default Model;
