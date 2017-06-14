import Backbone from 'backbone';

var MovieView = Backbone.View.extend({
  initialize: function(title) {
    this.template = title.template;
    this.listenTo(this.model, "change", this.render);
  },
  render: function() {
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  }
});

export default MovieView;
