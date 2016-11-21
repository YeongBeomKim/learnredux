import * as types from './ActionTypes';

export function addComment(postId,author,comment){
  return{
    type: types.ADDCOMMENT,
    postId,
    author,
    comment
  }
}
export function incrementLikes(index){
  return{
    type: types.INCREMENTLIKES,
    index
  }
}
export function removeComment(postId,i){
  return{
    type: types.REMOVECOMMENT,
    postId,
    i
  }
}
