import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    console.log(this.get('session'));
    this.get('session').fetch().catch((error) => {
      console.log(error);
    });
  }
});
