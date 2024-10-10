import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-service-desk-responsible', 'Unit | Model | i-i-s-service-desk-responsible', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
