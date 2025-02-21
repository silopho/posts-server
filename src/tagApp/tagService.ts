import { IError, ISuccess, ITag } from '../types/types';
import postRepositiry from './tagRepository'

async function getAllTags(): Promise< IError | ISuccess<ITag[] > > {
  const context = await postRepositiry.getAllTags()
  if (!context) {
    return { status: 'error', message: 'posts not found'}
  }
  return { status: 'success', data: context }
}

export default { getAllTags }