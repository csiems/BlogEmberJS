import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  title: DS.attr(),
  body: DS.attr(),
  likes: DS.attr(),
  dislikes: DS.attr(),
  post: DS.belongsTo('post', {async: true})
});
