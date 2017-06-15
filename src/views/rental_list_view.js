import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

import MovieView from './movie_view';

var RentalListView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;

    this.listenTo(this.model, "update", this.render);
  },
  render: function() {
    console.log("rendering the rental libraru");
    this.$('#rental-library').empty();
    var self = this;
    this.model.each(function(movie) {
      var movieView = new MovieView({
        model: movie,
        template: self.template,
      });
      self.$('#rental-library').append(movieView.render().$el);
    });

    // this.searchedMovies.forEach(function(movieView) {
    //   // movieView;
    //   self.$('#movie-list').append(movieView.render().$el);
    // });
    return this;
  }
  // events: {
  //   'click #search': 'search'
  // }
  // search: function(event) {
  //   var searchData = this.readSearch();
  //   this.model.add(searchData);
  // },
  // readSearch: function() {
  //   var titleData = this.$('input[name=title]').val();
  //   this.$('input[name=title]').val();
  //   var searchData = {};
  //   if (titleData && titleData != "") {
  //     searchData['title'] = titleData
  //   }
  //   return searchData;
  // }
});

export default RentalListView;
