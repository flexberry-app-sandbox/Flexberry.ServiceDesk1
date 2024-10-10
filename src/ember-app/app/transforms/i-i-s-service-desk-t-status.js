import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import TStatusEnum from '../enums/i-i-s-service-desk-t-status';

export default FlexberryEnum.extend({
  enum: TStatusEnum,
  sourceType: 'IIS.ServiceDesk.TStatus'
});
