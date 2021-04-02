import Controller from '@ember/controller';
import { action } from '@ember/object';
import { sort } from '@ember/object/computed';
//import { filter } from '@ember/object/computed';
import { tracked } from '@glimmer/tracking';

export default class CustomersIndexController extends Controller {
  @tracked sortProperty = 'lastName';
  //@tracked filterProperty = "";
  //@tracked searchValue = "";
  //@tracked sorting = "false";

  @sort('model', 'customersSortProps')
  sortedCustomers;
  
  //@filter('model.customersFiltProps', function(item) {
  //  if (this.item == this.customerSearch) {
  //    return true;
  //  } else {
  //    return false;
  //  }
  //})
  //filteredCustomers;

  get customersSortProps() {
    return [this.sortProperty];
  }
  
  //get customersFiltProps() {
  //  return [this.filterProperty];
  //}

  //get customerSearch() {
  //  return [this.searchValue];
  //}
  
  @action
  updateSortProperty(event) {
    this.sortProperty = event.target.value
  //  this.sorting = true;
  }
  
  //@action
  //updateFilterProperty(event) {
  //  this.filterProperty = event.target.value
  //}

  //@action
  //updateSearchValue(event) {
  //  this.searchValue = event.target.value
  //  this.sorting = !this.sorting
  //}
}
