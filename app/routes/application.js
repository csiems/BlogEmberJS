import Ember from 'ember';
var ref = new Firebase("https://cat-fancy.firebaseio.com");

export default Ember.Route.extend({

  beforeModel() {
    this.get('session').fetch().catch((error) => {
      console.log(error);
    });
  },

  model() {
    return ref.getAuth() ? this.store.findRecord('user', ref.getAuth().uid) : {email: "guest"};
  }
});
