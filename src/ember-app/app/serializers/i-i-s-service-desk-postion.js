import { Serializer as PostionSerializer } from
  '../mixins/regenerated/serializers/i-i-s-service-desk-postion';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(PostionSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
