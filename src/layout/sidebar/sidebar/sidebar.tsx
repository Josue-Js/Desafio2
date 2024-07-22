'use client'

import {
  DashboardSidebar,
  DashboardSidebarHeader,
  DashboardSidebarMain,
  DashboardSidebarNav,
  DashboardSidebarNavMain,
  DashboardSidebarNavLink,
  DashboardSidebarFooter
} from '@/components/sidebar/sidebar'
import { usePathname } from 'next/navigation'
import { CheckSquareIcon, LucideIcon, Menu, X } from 'lucide-react'
import { UserSession } from '@/schemas/user'
import { UserDropdown } from './components/userDropdown'
import { useSession } from 'next-auth/react'
import { useState } from 'react'

interface NavItem {
  href: string
  label: string
  icon: LucideIcon
  nexted?: boolean
}

const navItems: NavItem[] = [
  {
    href: '/app',
    label: 'Tarefas',
    icon: CheckSquareIcon
  }
]

interface SidebarProps {
  user: UserSession
}

export const Sidebar = ({ user }: SidebarProps) => {
  const pathname = usePathname()
  const { data: session } = useSession()
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string, nexted?: boolean) => {
    if (nexted) return pathname.startsWith(path)
    return pathname === path
  }

  return (
    <div>
      <button className='md:hidden absolute top-4 left-2' onClick={() => setIsOpen(true)}>
        <Menu />
      </button>
      <DashboardSidebar className={`absolute md:relative md:left-0 w-64 py-0 pt-3 bg-white transition-all duration-700 ${isOpen ? 'left-0' : 'left-[-300px]' }`}>
        <DashboardSidebarHeader className="flex justify-between items-center font-bold">
          Desafio 2
          <button className='md:hidden' onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </DashboardSidebarHeader>
        <DashboardSidebarMain className="flex flex-grow flex-col">
          <DashboardSidebarNav>
            <DashboardSidebarNavMain>
              {navItems.map((item) => (
                <DashboardSidebarNavLink
                  key={item.href}
                  href={item.href}
                  active={isActive(item.href, item.nexted)}
                >
                  <item.icon className="mr-3 h-4 w-4" />
                  {item.label}
                </DashboardSidebarNavLink>
              ))}
            </DashboardSidebarNavMain>
          </DashboardSidebarNav>

          {/* <DashboardSidebarNav className="mt-auto">
      <DashboardSidebarNavHeader>
        <DashboardSidebarNavHeaderTitle>
          Links extras
        </DashboardSidebarNavHeaderTitle>
      </DashboardSidebarNavHeader>
      <DashboardSidebarNavMain>
        <DashboardSidebarNavLink href="/">
          Precisa de ajuda?
        </DashboardSidebarNavLink>
        <DashboardSidebarNavLink href="/">Site</DashboardSidebarNavLink>
      </DashboardSidebarNavMain>
    </DashboardSidebarNav> */}
        </DashboardSidebarMain>
        <DashboardSidebarFooter>
          <UserDropdown user={user} />
        </DashboardSidebarFooter>
      </DashboardSidebar>
    </div>

  )
}
