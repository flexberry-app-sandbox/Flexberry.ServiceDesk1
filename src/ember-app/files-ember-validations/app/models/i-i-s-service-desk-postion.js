import {
  defineNamespace,
  defineProjections,
  Model as PostionMixin
} from '../mixins/regenerated/models/i-i-s-service-desk-postion';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(PostionMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
