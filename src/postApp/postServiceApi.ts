import { IError, ISuccess, Post } from '../types/types';
import postRepositiry from './postReposetory'

async function getAllPosts(): Promise< IError | ISuccess<Post[] > > {
  const posts = await postRepositiry.getAllPosts()
  if (!posts) {
    return { status: 'error', message: 'posts not found'}
  }
  return { status: 'success', data: posts }
}


async function getPostById(id: number): Promise< IError | ISuccess<Post> > {
  const post = await postRepositiry.getPostById(id)
  if (!post) {
    return { status: 'error', message: 'post not found'}
  }
  return { status: 'success', data: post }
}

export default { getAllPosts, getPostById }