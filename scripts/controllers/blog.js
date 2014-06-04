'use strict';

app.controller('BlogCtrl',function ($scope, Post){
	Post.get('https://boiling-fire-8098.firebaseIO.com/posts/:id.json',function(data){
		$scope.posts = data;
	});
	$scope.post = {content: '', title: '', date: Date.now()};
	$scope.submitPost = function(){
		Post.save($scope.post, function (ref) {
		  $scope.posts[ref.name] = $scope.post;
  		  $scope.post = {content: '', title: '', date: Date.now()};
		});

	};
    $scope.deletePost = function (postId) {
      Post.delete({id: postId}, function () {
		delete $scope.posts[postId];
	  });
    };
});