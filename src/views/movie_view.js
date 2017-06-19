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
<<<<<<< HEAD

  events: {
    "click h3.button.add-inventory": "addMovie"
  },

  addMovie: function(event){
    event.stopPropagation();
    console.log(this.model.attributes);
    this.trigger("movieAdded", this.model.attributes)
    // this.RentalListView.push(movieView);

=======
  events: {
    "click #add-button": "addMovie"
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
>>>>>>> master
  }


});

export default MovieView;
