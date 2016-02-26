import Ember from 'ember';
var ref = new Firebase("https://cat-fancy.firebaseio.com");

export default Ember.Controller.extend({
  firebase: Ember.inject.service(),
  flashMessages: Ember.inject.service(),
  actions: {
    signUp() {
      let controller = this;
      this.get('firebase').createUser({
        email: this.get('email') || '',
        password: this.get('password') || '',
      }, (error, data) => {
        if (error) {
          console.log(error);
        } else {
          ref.child("users").child(data.uid).set({
            email: this.get('email'),
            firstName: this.get('firstName'),
            lastName: this.get('lastName')
          });
          controller.set('email', null);
          controller.set('password', null);
          controller.transitionToRoute('sign-in');
        }
      })
    }
  }
});
