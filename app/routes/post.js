import Ember from 'ember';
var ref = new Firebase("https://cat-fancy.firebaseio.com");

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      post: this.store.findRecord('post', params.post_id),
      user: this.store.findRecord('user', ref.getAuth().uid)
    });
  },

  actions: {
    saveComment(params) {
      this.set('user', this.modelFor('application'));
      params.author = this.get('user').get('firstName');
      var newComment = this.store.createRecord('comment', params);
      var post = params.post;
      console.log(post.get('comments'));
      post.get('comments').addObject(newComment);
      newComment.save().then(function() {
        return post.save();
      });
      this.transitionTo('post', params.post);
    }
  }
});
