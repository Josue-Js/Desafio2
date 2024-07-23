'use client'

import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { NoteContainer, NoteContent, NoteFieldTitle, NoteHeader, NoteHeaderButton, NoteHeaderContent, NoteHeaderDate } from "@/layout/note/note";
import { MainRichText } from "@/layout/richtext/mainRichText";
import { createNote } from "@/requests/note/createNote";
import { deleteNote } from "@/requests/note/deleteNote";
import { findNoteById } from "@/requests/note/findNoteById";
import { updateNote } from "@/requests/note/updateNote";
import { Note } from "@/schemas/note";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeftToLine, Check, Trash2 } from 'lucide-react';
import Link from "next/link";
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";


const noteSchema = z.object({
  title: z.string().min(3),
})

type NoteValues = z.infer<typeof noteSchema>


export default function Page() {

  const searchParams = useSearchParams();
  const id = searchParams.get('id')
  const [note, setNote] = useState<Note>();
  const router = useRouter()




  useEffect(() => {
    if (!id) return
    (async () => {
      const note = await findNoteById({ id });

      if (note.error) return
      setNote(note.data)
      // setValue("title", note.data?.title || '')
    })()
  }, [])

  async function handleDeleteNote() {
    const response = await deleteNote({ id: note!.id });

    if (response.data === 200) {
      router.push('/app')
      router.refresh()

      toast({
        title: 'Nota',
        description: 'Nota deletada com sucesso',
        variant: 'destructive'
      })
    }
  }

  function handlerChangeTitle(event: any) {
    const title = event.target.value
    setNote({ ...note!, title: title })
  }


  function handleChangeDescription(value: string) {
    setNote({ ...note!, description: value })
  }

  async function handleUpdateNote() {

    const response = await updateNote({
      id: note!.id,
      title: note!.title,
      description: note?.description
    });

    console.log(response)

    if (response.data === 200) {
      router.push('/app')
      router.refresh()

      toast({
        title: 'Nota',
        description: 'Nota atualizado com sucesso',
        variant: 'default'
      })
    }
  }

  async function handleCreateNote() {

    const response = await createNote({
      title: note!.title,
      description: note?.description
    });

    if (response.data) {
      router.push('/app')
      router.refresh()

      toast({
        title: 'Nota',
        description: 'Nota criada com sucesso',
        variant: 'default'
      })
    }
  }


  return (
    <NoteContainer className="flex flex-col min-h-screen">
      <NoteHeader className="flex flex-col gap-4 items-center justify-between pl-10 md:pl-4">

        <Link href="/app" className="flex w-full pl-3">
          <ArrowLeftToLine size={24} />
        </Link>

        <NoteHeaderContent className="flex justify-between items-center">
          <NoteFieldTitle className="w-full">
            <Input
              id="Title"
              type="text"
              placeholder="Sem titulo"
              className="text-2xl md:text-3xl font-semibold shadow-[0_35px_35px_rgba(0,0,0,0)] border-[0px] max-w-[400px]"
              onChange={handlerChangeTitle}
              value={note?.title}
            />

            <NoteHeaderDate className="text-sm pl-2 pt-3 ">
              july 23, 2224, por lucas
            </NoteHeaderDate>
          </NoteFieldTitle>

          <NoteHeaderButton className="flex gap-4">
            {note?.id && (
              <Button variant="outline" onClick={handleDeleteNote} className="px-3">
                <Trash2 size={18} />
              </Button>
            )}

            <Button className="px-3"
              onClick={note?.id ? handleUpdateNote : handleCreateNote}
            >
              <Check size={18} />
            </Button>
          </NoteHeaderButton>
        </NoteHeaderContent>
      </NoteHeader>

      <NoteContent className="flex flex-shrink-0 justify-center h-[calc(100vh-156px)]">
        <MainRichText onChange={handleChangeDescription} content={note?.description} />
      </NoteContent>
    </NoteContainer>
  );
}