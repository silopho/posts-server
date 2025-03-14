import postRepositiry from './postsRepository'

import { IError, ISuccess } from '../types/types';
import { IPost }  from './postsTypes'

async function getAllPosts(): Promise< IError | ISuccess<IPost[]> > {
  const posts = await postRepositiry.getAllPosts()
  if (!posts) {
    return { status: 'error', message: 'posts not found'}
  }
  return { status: 'success', data: posts }
}

async function getPostById(id: number): Promise< IError | ISuccess<IPost> > {
  const post = await postRepositiry.getPostById(id)
  if (!post) {
    return { status: 'error', message: 'post not found'}
  }
  return { status: 'success', data: post }
}

async function createPost(data: IPost): Promise< IError | ISuccess<IPost> >{
  const post = await postRepositiry.createPost(data)
  if (!post) {
    return { status: 'error', message: 'post not found'}
  }
  return { status: 'success', data: post }
}

export default { getAllPosts, getPostById, createPost }