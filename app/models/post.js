import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  headerImage: DS.attr(),
  body: DS.attr(),
  snippet: DS.attr(),
  timestamp: DS.attr(),
  comments: DS.hasMany('comment', {async: true})
});
