import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('customers', function() {
    this.route('customer', { path: '/:customer_id' });
  });
  this.route('dashboard');
});

