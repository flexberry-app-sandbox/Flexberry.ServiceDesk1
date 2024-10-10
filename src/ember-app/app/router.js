import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-service-desk-counterparty-l');
  this.route('i-i-s-service-desk-counterparty-e',
  { path: 'i-i-s-service-desk-counterparty-e/:id' });
  this.route('i-i-s-service-desk-counterparty-e.new',
  { path: 'i-i-s-service-desk-counterparty-e/new' });
  this.route('i-i-s-service-desk-incident-l');
  this.route('i-i-s-service-desk-incident-e',
  { path: 'i-i-s-service-desk-incident-e/:id' });
  this.route('i-i-s-service-desk-incident-e.new',
  { path: 'i-i-s-service-desk-incident-e/new' });
  this.route('i-i-s-service-desk-postion-l');
  this.route('i-i-s-service-desk-postion-e',
  { path: 'i-i-s-service-desk-postion-e/:id' });
  this.route('i-i-s-service-desk-postion-e.new',
  { path: 'i-i-s-service-desk-postion-e/new' });
  this.route('i-i-s-service-desk-responsible-l');
  this.route('i-i-s-service-desk-responsible-e',
  { path: 'i-i-s-service-desk-responsible-e/:id' });
  this.route('i-i-s-service-desk-responsible-e.new',
  { path: 'i-i-s-service-desk-responsible-e/new' });
});

export default Router;
