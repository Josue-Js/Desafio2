'use client'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'
import { useForm } from 'react-hook-form'
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import {
  FormContainer,
  FormContent,
  FormHeader,
  FormInputs,
  FormTitle
} from '@/components/form/FormPage'
import { useState } from 'react'
import { signUp } from '@/requests/auth/signUp'


const formSchema = z.object({
  name: z.string().min(3, 'nome deve ter no mínimo 3 caracteres'),
  email: z.string().email('E-mail inválido'),
  password: z.string().min(8, 'Senha deve ter no mínimo 8 caracteres')
})

type FormValues = z.infer<typeof formSchema>

export default function Page() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const form = useForm<FormValues>({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    },
    reValidateMode: 'onChange',
    resolver: zodResolver(formSchema)
  })

  const handleSubmit = form.handleSubmit(async (data) => {
    setIsLoading(true)

    const response = await signUp({
      name: data.name,
      email: data.email,
      password: data.password
    })
    
    if (response.data === 201) {
      toast({
        title: 'Sucesso',
        description: 'o usuário foi cadastrado com sucesso',
        style: {
          background: '#00CB08',
          color: 'white',
        },
      })
    } else if (response.error) {
      toast({
        title: 'Aviso',
        description: response.error,
        variant: "default",
      })
    } else {
      toast({
        title: 'Erro interno',
        description: 'Ocorreu um erro interno, tente novamente mais tarde'
      })
    }

    form.reset()
    setIsLoading(false);
  })

  return (
    <FormContainer>
      <Form {...form}>
        <FormHeader>
          <FormTitle>Cadastrar se</FormTitle>
          <FormDescription>
            Bem vindo! Por favor, insira seu e-mail e senha para continuar.
          </FormDescription>
        </FormHeader>

        <form onSubmit={handleSubmit}>
          <FormContent>
            <FormInputs>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="name">Name</FormLabel>
                    <FormControl>
                      <Input
                        id="name"
                        placeholder="example"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <FormControl>
                      <Input
                        id="email"
                        placeholder="mail@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="password">Senha</FormLabel>
                    <FormControl>
                      <Input
                        id="password"
                        type="password"
                        placeholder="4H8I2Y#5"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </FormInputs>
            <Button
              className="w-full"
              type="submit"
              disabled={form.formState.isSubmitting}
            >
              {isLoading ? 'Verificando...' : 'Entrar'}
            </Button>
          </FormContent>
        </form>
      </Form>
    </FormContainer>
  )
}
