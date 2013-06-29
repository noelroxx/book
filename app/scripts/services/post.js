'use strict';

angular.module('bookApp')
  .factory('PostFactory', function(){
    return function(type){
      this.type = type;
      this.content = "blabla"
    };
  });

angular.module('bookApp')
  .factory('PostService', function (PostFactory) {
    var posts = ["tada", "foobar"];

    // Public API here
    return {
      getPosts: function () {
        return posts;
      },
      addPost: function (type) {
        var post = new PostFactory(type);
        posts.push(post);
      }
    };
  });
