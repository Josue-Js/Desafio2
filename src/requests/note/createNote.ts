'use server'

import { Note } from '@/schemas/note'
import { api } from '@/services/api'
import { AxiosCustomError, AxiosCustomResponse } from '@/types/api'

interface createNoteRequest {
  title: string,
  description?: string | null
}


export const createNote = async ({
  title,
  description
}: createNoteRequest): Promise<AxiosCustomResponse<Note>> => {
  try {

    const response = await api.post<Note>(`/notes/`, {
        title,
        description
    })
    return { data: response.data }

  } catch (err) {
    const error = err as AxiosCustomError

    return {
      error: error.response.data.message || 'Erro, tente novamente mais tarde.'
    }
  }
}
