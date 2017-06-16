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
  },

  events: {
    "click h3.button.add-inventory": "addMovie"
  },

  addMovie: function(event){
    event.stopPropagation();
    console.log(this.model.attributes);
    this.trigger("movieAdded", this.model.attributes)
    this.RentalListView.push(movieView);

  }


});

export default MovieView;
