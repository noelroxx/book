'use strict';

angular.module('bookApp')
  .factory('PostFactory', function(){
    return function(type){
      if(type==="text"){
        this.type = type;
        this.content = "";
      }
    };
  });

angular.module('bookApp')
  .factory('PostService', function (PostFactory) {
    var posts = [];

    // Public API here
    return {
      getPosts: function () {
        return posts;
      },
      addPost: function (type) {
        console.log(posts);
        var post = new PostFactory(type);
        posts.push(post);
      }
    };
  });
