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
    "click #add-button": "addMovie",
    "click #inventory-button": "addInventory"
  },
  addMovie: function(movie) {
    $.ajax({
      method: "POST",
      url: "http://localhost:3000/movies",
      data: {movie: this.model.attributes}, //needed the brackets and movie:
      success: function(input) {
        alert("Movie added");
        console.log("DID WE ADD A MOVIE??");
      },
      error: function() {
        alert("error");
      }
    });
  },
  addInventory: function() {
    $.ajax({
      method: "PUT",
      url: "http://localhost:3000/movies/"+2,
      data: {movie: this.model.attributes},
      success: function() {
        alert("Copy of movie added to inventory");
        console.log($(this).attr('data-movieID'));
      },
      error: function() {
        alert("error");
        console.log($(this).attr('data-movieID'));
      }
    });
  }
});

export default MovieView;
