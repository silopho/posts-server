import { IError, ISuccess, IPost } from '../types/types';
import postRepositiry from './postRepository'
// следи за табуляциями, где то 4, где то 2
async function getAllPosts(): Promise< IError | ISuccess<IPost[] > > {
    // это не контекст(result | posts)
  const context = await postRepositiry.getAllPosts()
  if (!context) {
    return { status: 'error', message: 'posts not found'}
  }
  return { status: 'success', data: context }
}

async function getPostById(id: number): Promise< IError | ISuccess<IPost> > {
  const context = await postRepositiry.getPostById(id)
  if (!context) {
    return { status: 'error', message: 'post not found'}
  }
  return { status: 'success', data: context }
}

async function createPost(data: IPost): Promise< IError | ISuccess<IPost> >{
  const context = await postRepositiry.createPost(data)
  if (!context) {
    return { status: 'error', message: 'post not found'}
  }
  return { status: 'success', data: context }
}

export default { getAllPosts, getPostById, createPost }