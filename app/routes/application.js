import Ember from 'ember';
var ref = new Firebase("https://cat-fancy.firebaseio.com");

export default Ember.Route.extend({
  beforeModel() {
    this.get('session').fetch().catch((error) => {
      console.log(error);
    });
  },

  // model() {
  //   return this.store.findRecord('users', ref.getAuth().uid);
  // }
});
