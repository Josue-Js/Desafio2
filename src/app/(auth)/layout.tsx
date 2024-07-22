import { FormPage } from '@/components/form/FormPage'
import { MainHeader } from '@/layout/Header/mainHeader';
import { PropsWithChildren } from 'react'

export default async function Layout({ children }: PropsWithChildren) {
  return (
    <div className='max-w-[1600px] mx-auto px-4  md:px-8'>
      <MainHeader />
      <FormPage>{children}</FormPage>
    </div>
  );
}
