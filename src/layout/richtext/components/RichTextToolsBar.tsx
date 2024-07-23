import { Bold, Italic, Underline, Strikethrough, Code, Heading1} from "lucide-react"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/ToggleGroup"
import { Editor } from "@tiptap/react"

export type RichTextToolsBarGenericProps<T = unknown> = {
  className?: string
  editor: Editor | null
} & T



export function RichTextToolsBar({
  className,
  editor
}:RichTextToolsBarGenericProps ) {

  if(!editor) return
editor.isActive('heading')
  return (
    <ToggleGroup type="multiple" className="flex gap-2 md:gap-4 rounded-tr-2xl rounded-tl-2xl w-full py-2 px-3 justify-start border-b-[1px] border-slate-200" >
      <ToggleGroupItem value="bold" aria-label="Toggle bold" onClick={() => {
        editor.chain().focus().toggleBold().run()
      }}>
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic" onClick={() => {
        editor.chain().toggleItalic().run()
      }}>
        <Italic className="h-4 w-4" size={18}/>
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline" onClick={() => {
        editor.chain().focus().toggleUnderline().run()
      }}>
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="strike" aria-label="Toggle strike" onClick={() => {
        editor.chain().focus().toggleStrike().run()
      }}>
        <Strikethrough className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="code" aria-label="Toggle code" onClick={() => {
        editor.chain().focus().toggleCode().run()
      }}>
        <Code className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="heading" aria-label="Toggle code" onClick={() => {
        editor.chain().focus().toggleHeading({level: 1}).run()
      }}>
        <Heading1 className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}