import { Serializer as CounterpartySerializer } from
  '../mixins/regenerated/serializers/i-i-s-service-desk-counterparty';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(CounterpartySerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
