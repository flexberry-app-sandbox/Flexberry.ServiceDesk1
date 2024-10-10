import { Serializer as ResponsibleSerializer } from
  '../mixins/regenerated/serializers/i-i-s-service-desk-responsible';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ResponsibleSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
