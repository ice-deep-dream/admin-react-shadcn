import { ConfigDrawer } from '@/components/config-drawer'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { Separator } from '@/components/ui/separator'
import { ThemeSwitch } from '@/components/theme-switch'
import { TasksDialogs } from './components/tasks-dialogs'
import { TasksPrimaryButtons } from './components/tasks-primary-buttons'
import { TasksProvider } from './components/tasks-provider'
import { TasksTable } from './components/tasks-table'
import { tasks } from './data/tasks'
import { useTranslation } from 'react-i18next'

export function Tasks() {
  const { t } = useTranslation()
  return (
    <TasksProvider>
      {/* ===== Top Heading ===== */}
      <Header>
        <Search />
        <div className='ms-auto flex items-center space-x-4'>
          <ThemeSwitch />
          <ConfigDrawer />
          <ProfileDropdown />
        </div>
      </Header>

      {/* ===== Content ===== */}
      <Main fixed>
        <div className='flex items-center justify-between gap-2'>
          <div>
            <h1 className='text-2xl font-bold tracking-tight'>
              {t('common.tasks')}
            </h1>
            <p className='text-muted-foreground'>
              {t('tasks.heresAListOfYourTasksForThisMonth')}
            </p>
          </div>
          <TasksPrimaryButtons />
        </div>
        
        <div className='my-4 flex items-end justify-between sm:my-0 sm:items-center'>
          <div className='flex flex-col gap-4 sm:my-4 sm:flex-row'>
            {/* 搜索和筛选工具 */}
          </div>
        </div>
        
        <Separator className='shadow-sm' />
        
        <TasksTable data={tasks} />
      </Main>

      <TasksDialogs />
    </TasksProvider>
  )
}
