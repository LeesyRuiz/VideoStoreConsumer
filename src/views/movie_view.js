import Backbone from 'backbone';
import $ from 'jquery';

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
    "click #add-button": "addMovie"
  },
  addMovie: function(movie) {
    $.ajax({
      method: "POST",
      url: "http://localhost:3000/movies",
      data: {movie: this.model.attributes},
      success: function(input) {
        alert("Movie added");
        console.log("DID WE ADD A MOVIE??");
      },
      error: function() {
        alert("error");
      }
    });
  }
});

export default MovieView;
