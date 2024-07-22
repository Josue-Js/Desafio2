'use server'

import { AxiosCustomError, AxiosCustomResponse } from '@/types/api'
import { AxiosResponse } from 'axios'
import Axios from 'axios'
import { env } from 'process'

interface SignUpRequest {
  name: string
  email: string
  password: string
}

interface SignInResponse {
  access_token: string
}

export const signUp = async ({
  name,
  email,
  password
}: SignUpRequest): Promise<AxiosCustomResponse<number>> => {
  try {
    const response = await Axios.post(`${env.NEXT_PUBLIC_API_BASE_URL}/signup`, {
      name,
      email,
      password
    })

    response.status

    return { data: response.status }
  } catch (err) {
    const error = err as AxiosCustomError

    return {
      error: error.response.data.message || 'Erro, tente novamente mais tarde.'
    }
  }
}
