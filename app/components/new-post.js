import Ember from 'ember';

export default Ember.Component.extend({
  froalaEditor: {
    params: {
      toolbarInline: false,
      placeholderText: 'Enter..'
    },
  },

  actions: {
    savePost() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        headerImage: this.get('headerImage'),
        body: $(".fr-element").html(),
        snippet: $(".fr-element").html().slice(0,200) + "...",
        timestamp: new Date().getTime()
      };
      this.sendAction('savePost', params);
    }
  }
});
