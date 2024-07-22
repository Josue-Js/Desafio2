import { z } from 'zod'

export const NoteSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().nullable(),
  createdAt: z.string(),
  userId: z.string(),
})

export type Note = z.infer<typeof NoteSchema>

