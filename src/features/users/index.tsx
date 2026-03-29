import { getRouteApi } from '@tanstack/react-router'
import { ConfigDrawer } from '@/components/config-drawer'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { Separator } from '@/components/ui/separator'
import { UsersDialogs } from './components/users-dialogs'
import { UsersPrimaryButtons } from './components/users-primary-buttons'
import { UsersProvider } from './components/users-provider'
import { UsersTable } from './components/users-table'
import { users } from './data/users'
import { useTranslation } from 'react-i18next'

const route = getRouteApi('/_authenticated/users/')

export function Users() {
  const { t } = useTranslation()
  const search = route.useSearch()
  const navigate = route.useNavigate()

  return (
    <UsersProvider>
      <Header fixed>
        <Search />
        <div className='ms-auto flex items-center space-x-4'>
          <ThemeSwitch />
          <ConfigDrawer />
          <ProfileDropdown />
        </div>
      </Header>

      <Main fixed>
        {/* 标题和按钮左右排列 */}
        <div className='flex items-center justify-between gap-2'>
          <div>
            <h1 className='text-2xl font-bold tracking-tight'>
              {t('common.users')}
            </h1>
            <p className='text-muted-foreground'>
              {t('common.manageYourUsersAndTheirRolesHere')}
            </p>
          </div>
          {/* 右侧主要操作按钮 */}
          <UsersPrimaryButtons />
        </div>

        <Separator className='shadow-sm' />

        {/* 表格区域 - 独立滚动 */}
        <div className='faded-bottom no-scrollbar grid grid-cols-1 gap-4 overflow-auto pt-4 pb-16'>
          <UsersTable data={users} search={search} navigate={navigate} />
        </div>
      </Main>

      <UsersDialogs />
    </UsersProvider>
  )
}
