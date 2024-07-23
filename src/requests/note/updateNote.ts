'use server'

import { api } from '@/services/api'
import { AxiosCustomError, AxiosCustomResponse } from '@/types/api'

interface updateNoteRequest {
  id: string
  title: string,
  description?: string | null
}

export const updateNote = async ({
  id,
  title,
  description
}: updateNoteRequest): Promise<AxiosCustomResponse<number>> => {
  try {

    const response = await api.put(`/notes/${id}`, {
        title,
        description
    })
    return { data: response.status }

  } catch (err) {
    const error = err as AxiosCustomError

    return {
      error: error.response.data.message || 'Erro, tente novamente mais tarde.'
    }
  }
}
