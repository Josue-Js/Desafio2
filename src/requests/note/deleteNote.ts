'use server'

import { api } from '@/services/api'
import { AxiosCustomError, AxiosCustomResponse } from '@/types/api'

interface DeleteNoteRequest {
  id: string
}

export const deleteNote = async ({
  id
}: DeleteNoteRequest): Promise<AxiosCustomResponse<number>> => {
  try {

    const response = await api.delete(`/notes/${id}`)
    return { data: response.status }

  } catch (err) {
    const error = err as AxiosCustomError

    return {
      error: error.response.data.message || 'Erro, tente novamente mais tarde.'
    }
  }
}
