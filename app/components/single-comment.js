import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateLikes(comment) {
      comment.incrementProperty('likes');
      comment.save();
    },

    updateDislikes(comment) {
      comment.incrementProperty('dislikes');
      comment.save();
    },
  }
});
