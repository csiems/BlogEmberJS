import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveComment() {
      var params = {
        post: this.get('post'),
        author: this.get('author'),
        body: $(".fr-element").html(),
        title: this.get('title') || $(".fr-element").html().slice(0,30),
        likes: 0,
        dislikes: 0
      };
      this.sendAction('saveComment', params);
    }
  }
});
