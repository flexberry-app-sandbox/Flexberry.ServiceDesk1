import {
  defineNamespace,
  defineProjections,
  Model as CounterpartyMixin
} from '../mixins/regenerated/models/i-i-s-service-desk-counterparty';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(CounterpartyMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
