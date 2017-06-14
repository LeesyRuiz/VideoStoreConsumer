import Backbone from 'backbone';
import $ from 'jquery';
import Movie from '../models/movie';

var MovieList = Backbone.Collection.extend({
  model: Movie,
  url: 'http://localhost:3000/movies?query=' + $('input[name=title]')
});

export default MovieList;
