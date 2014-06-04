'use strict';

app.factory('Post', function ($resource) {
  return $resource('https://boiling-fire-8098.firebaseIO.com/posts/:id.json');
});