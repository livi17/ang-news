'use strict';

app.controller('postViewCtrl', function ($scope, $routeParams, Post) {
	$scope.post = Post.get($routeParams.postId);
});