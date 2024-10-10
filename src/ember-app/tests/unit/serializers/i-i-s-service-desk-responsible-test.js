import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-service-desk-responsible', 'Unit | Serializer | i-i-s-service-desk-responsible', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-service-desk-responsible',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-service-desk-t-status',

    'model:i-i-s-service-desk-comment',
    'model:i-i-s-service-desk-counterparty',
    'model:i-i-s-service-desk-incident',
    'model:i-i-s-service-desk-postion',
    'model:i-i-s-service-desk-responsible',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
