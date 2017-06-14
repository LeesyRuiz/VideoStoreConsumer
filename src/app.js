// /src/app.js
import MovieList from '/collections/movie_list';
import MovieListView from '/views/movie_list_view';
// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';

// var movieList = new MovieList();

var movieDatabaseResults = function(event) {
  console.log("Gimme the results dammit");
  var search = $('#movie-title').val();
  console.log(search);
  var movieList = new MovieList({query: search});
  movieList.fetch();

  var displayResults = new MovieListView({
    model: movieList,
    template: _.template($('#movie-title-list-template').html()),
    el: $('main')
  });
};

// var movieList = new MovieList({query: $('#movie-title').val()});
// // $('#movie-title').val()
// movieList.fetch();
//
// var movieListParams = {
//   el: $('main'),
//   model: movieList
// };
//
// var myMovieListView = new MovieListView(movieListParams);



// ready to go
$(document).ready(function() {
  $('#search').click(movieDatabaseResults);
});
