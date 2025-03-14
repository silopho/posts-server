import postRepositiry from './tagsRepository'

import { IError, ISuccess } from '../types/types';
import { ITag } from './tagsTypes'

async function getAllTags(): Promise< IError | ISuccess<ITag[] > > {
  const tags = await postRepositiry.getAllTags()
  if (!tags) {
    return { status: 'error', message: 'tags not found'}
  }
  return { status: 'success', data: tags }
}

export default { getAllTags }