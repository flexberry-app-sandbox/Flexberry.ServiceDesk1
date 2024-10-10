import { Serializer as IncidentSerializer } from
  '../mixins/regenerated/serializers/i-i-s-service-desk-incident';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(IncidentSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
