import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class DashboardRoute extends Route {
  @service store;

  model() {
    return this.store.findAll('customer', { reload: true });
  }
}
