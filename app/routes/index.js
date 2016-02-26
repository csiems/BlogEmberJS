import Ember from 'ember';
var ref = new Firebase("https://cat-fancy.firebaseio.com");

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      posts: this.store.findAll('post').then(function(posts) {
        return posts.sortBy('timestamp').reverse();
      }),

      user: ref.getAuth() ? this.store.findRecord('user', ref.getAuth().uid) : {email: "guest"}
    })
  }
});
