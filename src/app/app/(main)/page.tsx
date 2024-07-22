import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderNav,
  DashboardPageHeaderTitle,
  DashboardPageMain,
  DashboardPageMainCardContainer,
} from '@/layout/dashboard/dashboard'
import { Button } from '@/components/ui/button'
import { PlusIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { findAllNotes } from '@/requests/note/findAllNotes'
import { formatDateTime } from '@/lib/formatDate'
import { removeTags } from '@/lib/removeTags'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'

export default async function Page() {

  const notes = await findAllNotes();

  return (
    <DashboardPage>
      <DashboardPageHeader className='pl-10 md:pl-6'>
        <DashboardPageHeaderTitle>Tarefas</DashboardPageHeaderTitle>
        <DashboardPageHeaderNav>
          <DashboardPageHeaderNav>
            <Link href="/app/note">
              <Button variant="outline" size="sm">
                <PlusIcon className="mr-3 h-4 w-4" />
                Criar tarefa
              </Button>
            </Link>
          </DashboardPageHeaderNav>
        </DashboardPageHeaderNav>
      </DashboardPageHeader>
      <DashboardPageMain className='overflow-auto h-full'>
        <DashboardPageMainCardContainer className='grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-4 h-max pb-12'>
          {notes.data?.map(({ id, title, description, createdAt }) => (
            <Card className='px-4 pt-3 pb-5 h-max' key={id}>
              <Link href={`/app/note?id=${id}`}>
              <CardTitle>{title}</CardTitle>
              <CardContent className='flex flex-col gap-3 p-0 pt-2'>
                <span className='text-xs text-muted-foreground'>{formatDateTime(createdAt)}</span>
                <CardDescription className='line-clamp-3'>
                  {description ? removeTags(description) : '...'}
                </CardDescription>
              </CardContent>
              </Link>
            </Card>
          ))}
        </DashboardPageMainCardContainer>
      </DashboardPageMain>
    </DashboardPage>
  )
}
