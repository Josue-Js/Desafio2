'use client'

import { RichText } from "@/components/richtext/richtext";
import { RichTextToolsBar } from "./components/RichTextToolsBar";
import Underline from '@tiptap/extension-underline'
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Heading from '@tiptap/extension-heading'
import { styleText } from "util";
import Code from '@tiptap/extension-code'
import { useEffect } from "react";


export type MainRichTextGenericProps<T = unknown> = {
  className?: string
  content?: string | null
  onChange(value: string): void
} & T

export function MainRichText({ content, onChange }: MainRichTextGenericProps) {

  const editor = useEditor({
    extensions: [
      StarterKit,
      Code.configure({
        HTMLAttributes: {
          class: 'bg-slate-300 p-1 rounded-sm'
        }
      }),
      Heading.configure({
        levels: [1],
        HTMLAttributes: {
          class: 'text-3xl'
        }
      }),
      Underline,
    ],
    content: content,
    parseOptions: {
      preserveWhitespace: 'full'
    },
    editorProps: {
      attributes: {
        class: 'w-full border-0 outline-none '
      }
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML())
    }
  })

  useEffect(() => {

    return () => {
      editor?.destroy()
    }
  }, [])

  useEffect(() => {
    if (!editor) return

    editor.commands.setContent(content || '')
  }, [content])

  return (
    <RichText className="h-full flex flex-col aria-pressed:bg-blue-100 overflow-auto ">
      <RichTextToolsBar editor={editor} />
      <div className="px-4 py-4 flex  w-full h-full">
        <EditorContent editor={editor} className="flex w-full border-0  " />
      </div>
    </RichText>
  );
}