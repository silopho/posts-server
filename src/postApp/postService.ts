import { IError, ISuccess, Post } from '../types/types';
import postRepositiry from './postReposetory'

async function getAllPosts(): Promise< IError | ISuccess<Post[] > > {
  const context = await postRepositiry.getAllPosts()
  if (!context) {
    return { status: 'error', message: 'posts not found'}
  }
  return { status: 'success', data: context }
}



async function getPostById(id: number): Promise< IError | ISuccess<Post> > {
  const context = await postRepositiry.getPostById(id)
  if (!context) {
    return { status: 'error', message: 'post not found'}
  }
  return { status: 'success', data: context }
}


async function createPost(data: Post): Promise< IError | ISuccess<Post> >{
  const context = await postRepositiry.createPost(data)
  if (!context) {
    return { status: 'error', message: 'post not found'}
  }
  return { status: 'success', data: context }
}

export default { getAllPosts, getPostById, createPost }