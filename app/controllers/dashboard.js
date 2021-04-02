import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { sort } from '@ember/object/computed';
import { action } from '@ember/object';

export default class DashboardController extends Controller {
    @tracked sortProperty = 'budget:desc';
    @tracked viewButton = "false";
    
    @sort('model', 'customersSortProps')
    sortedCustomersTopProspects;

    get topFive() {
        return this.sortedCustomersTopProspects.slice(0,5);
    }

    get filteredRows() {
        return this.topFive
    }

    get customersSortProps() {
        return [this.sortProperty];
    }
    
    get viewButtonProp() {
        return [this.viewButton];
    }
    get totalBudget() {
        return this.model.reduce((sum,customer) => {
            return sum + customer.budget;
        }, 0);
    }

    @action
    viewButtonPressed(event) {
        this.viewButton = !this.viewButton;
    }
}
