import {
  defineNamespace,
  defineProjections,
  Model as IncidentMixin
} from '../mixins/regenerated/models/i-i-s-service-desk-incident';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(IncidentMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
